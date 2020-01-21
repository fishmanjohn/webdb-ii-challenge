const router = require('express').Router()
const db = require('../helpers/cars-model')

router.get('/', (req,res)=>{
    db.find()
    .then(cars=>{
        console.log(cars)
        res.status(200).json(cars)})
        .catch(err=>{console.log(err)
          res.status(500).json({error: "There was an error while reteving the information from the database"})
          })
    });

    router.post('/', (req,res) =>{
        db.insert(req.body)
        .then(user=> res.status(201).json(user))
        .catch(err=>{
            console.log(err)
            res.status(500).json({message:'internal server error'})
        })
    })
module.exports = router