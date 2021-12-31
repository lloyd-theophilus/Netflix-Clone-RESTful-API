const router = require('express').Router()
const User = require('../models/User')
const CryptoJS = require("crypto-js")  
const jwt = require('jsonwebtoken')



//Uer registration/sign and sign up

router.post('/register', async (req, res) => {
const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRETE_KEY).toString(),
});
try {
    const user =  await newUser.save()

    res.status(201).json(user)

} catch (error) {
    res.status(500).json(error)
}
});

//User login

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({email: req.body.email})
        !user && res.status(404).json("The username or password is incorrect")

        const bytes  = CryptoJS.AES.decrypt(user.password, process.env.SECRETE_KEY);
        const originalpassword = bytes.toString(CryptoJS.enc.Utf8);
 
        originalpassword !== req.body.password && res.status(404).json("The username or password is incorrect")

        //Creating a jsonwebtoken to authorize users and protect API routes ID
        const accessToken  = jwt.sign({id: user._id, isAdmin: user.isAdmin},
             process.env.SECRETE_KEY, 
            { expiresIn: '5d'}
            );
        //Sending only user info without password details
        const { password, ...info } = user._doc

        res.status(200).json({...info, accessToken})
        
    } catch (error) {
        res.status(503)
    }
})
 
module.exports = router; 