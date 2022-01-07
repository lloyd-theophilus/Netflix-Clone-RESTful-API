const router = require('express').Router()
const User = require('../models/User')
const CryptoJS = require("crypto-js") 
const verify = require('../verifyToken')


//Update users
router.put('/:id', verify, async(req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        if(req.body.password) {
            req.body.password = CryptoJS.AES.encrypt(req.body.password, 
            process.env.SECRETE_KEY).toString() 
        }

        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            }, {
                new: true
            })
            res.status(200).json(updatedUser)
        } catch (error) {
            res.status(500).json(error)
    }
   
    } else{
        res.status(403).json('You cannot update this account')
    }
    
})

//Delete users by id
router.delete('/:id', verify, async(req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {

        try {
             await User.findByIdAndDelete(req.params.id)
            res.status(200).json('User has been deleted')
        } catch (error) {
            res.status(500).json(error)
    }
   
    } else{
        res.status(403).json('You cannot delete user in this account')
    }
    
})

//Get a user by id
router.get('/find/:id', async(req, res) => {
        try {
           const user = await User.findById(req.params.id)
           //Sending only user info without password details
           const { password, ...info } = user._doc

           res.status(200).json({...info})
            
        } catch (error) {
            res.status(500).json(error)
        }
})

//Get all users 
router.get('/', verify, async(req, res) => {
    //return all new users
    const query = req.query.new
    if (req.user.isAdmin) {

        try {
            //If there is a query, find all users but display up 20,also if there is no query, then find all users
           const users = query ? await User.find().sort({_id:-1}).limit(5) : await User.find()
            res.status(200).json(users)
        } catch (error) {
            res.status(500).json(error)
    }
   
    } else{
        res.status(403).json('You are not allwed to display all users')
    }
    
})


//Get users statistics using aggregation functions 
router.get('/stats', async(req, res) =>{
    const today = new Date()
    const lastYear = today.setFullYear(today.setFullYear() - 1)

    try {
        const data = await User.aggregate([
            {
                $project:{
                    month: {$month: '$createdAt'}
                }
            }, {
                $group: {
                    _id: '$month',
                    total: {$sum: 1}
                }
            }
        ])

        res.status(200).json(data)
        
    } catch (error) {
        res.status(500).json(error)
        
    }
})


module.exports = router