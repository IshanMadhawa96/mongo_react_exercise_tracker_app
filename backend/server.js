const express = require('express');
//const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
//creating express server
app.use(cors());// cors middleware
app.use(express.json());

const uri  = process.env.ATLAS_URI;
//console.log(uri);
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open',()=>{
    console.log('MongoDB connection established successfully');
}).on('error',function(error){
    console.log('error is:',error)
});
//run server
app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`);
})