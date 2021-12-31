const router = require('express').Router()
const Movie = require('../models/Movie')
const verify = require('../verifyToken')


//Create New Movies
router.post('/', verify, async(req, res) => {
    if (req.user.isAdmin) {
        const newMovie = new Movie(req.body)
        try {
            const movie = await newMovie.save()
            res.status(201).json(movie)
        } catch (error) {
            res.status(500).json(error)
        }
        
    } else{
        res.status(403).json('You are not allowed')
    }
    
})

//Update Movies
router.put('/:id', verify, async(req, res) => {
    if (req.user.isAdmin) {
        try {
            const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            }, {
                new: true
            })
            res.status(201).json(updatedMovie)
        } catch (error) {
            res.status(500).json(error)
        }
        
    } else{
        res.status(403).json('You are not allowed')
    }
    
})


//Delete movies by id
router.delete('/:id', verify, async(req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {

        try {
             await Movie.findByIdAndDelete(req.params.id)
            res.status(200).json('Movie has been deleted')
        } catch (error) {
            res.status(500).json(error)
    }
   
    } else{
        res.status(403).json('You cannot delete a movie in this account')
    }
    
})

//Get a movie by id
router.get('/find/:id', async(req, res) => {
        try {
           const movie = await Movie.findById(req.params.id)
           res.status(200).json(movie)
            
        } catch (error) {
            res.status(500).json(error)
        }
})

//Get random movies
router.get('/randoms', async(req, res) => {
    const type = req.query.type
    let movie
    //Aggregating reandom movies
    try {
      if(type === 'series') {
       movie = await Movie.aggregate([
            {$match: {isSeries: true} },
            {$sample: {size: 1} },
        ])
      } else {
        movie = await Movie.aggregate([
            {$match: {isSeries: false} },
            {$sample: {size: 1} },
        ])
      }
        res.status(200).json(movie)
    } catch (error) {
        res.status(500).json(error)
    }
})


//Get all movies 
router.get('/', verify, async(req, res) => {
    if (req.user.isAdmin) {

        try {
           const movie = await Movie.find()
            res.status(200).json(movie)
        } catch (error) {
            res.status(500).json(error)
    }
   
    } else{
        res.status(403).json('You are not allwed to display all movies')
    }
    
})


module.exports = router