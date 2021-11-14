const router = require('express').Router();
let Exercise = require('../models/exercise.model');

router.route('/').get((req,res)=>{
    Exercise.find()
    .then(exercises => res.json(exercises)).catch(err => res.status(400).json('Error'
    +err));
   
});