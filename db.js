const mongoose = require('mongoose');
require('dotenv').config();

//define the mongodb connection url for localhost
//const mongoURL =process.env.mongoDB_Local; // hotels is name of our database in mongodb

//mongodb connecton url for mongodb atlas (cloud)
const mongoURL =process.env.mongoDB_URL;

//set up mongodb connection 
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

//get the default connection 
//mongoose maintains a default connection object representing the Mongodb Connection
const db =mongoose.connection;

//define event listeners for database connection
db.on('connected',()=>{
    console.log('Connected to MongoDB server');
})

db.on('error',(err)=>{        // error ,connected,disconnected are keywords that db understand in mongodb 
    console.log('MongoDB Connection error');
})

db.on('disconnected',()=>{
    console.log('MongoDB disconnected');
})


//export the database connection 

module.exports=db;