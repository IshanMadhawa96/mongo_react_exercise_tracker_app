const express = require('express');
//const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
//env config
require('dotenv').config();
//Routes imports
const exercisesRouter = require ('./routes/exercises');
const userRouter = require('./routes/users');

const app = express();
const port = process.env.PORT || 5000;
//creating express server
app.use(cors());// cors middleware
app.use(express.json());
//mongo connection
const uri  = process.env.ATLAS_URI;
//console.log(uri);
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open',()=>{
    console.log('MongoDB connection established successfully');
}).on('error',function(error){
    console.log('error is:',error)
});

//using route
app.use('/exercises',exercisesRouter);
app.use('/users',userRouter);

//run server
app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`);
})