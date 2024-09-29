const mongoose = require('mongoose');

//define the mongodb connection url for localhost
//const mongoURL ='mongodb://127.0.0.1:27017/hotels' // hotels is name of our database in mongodb

//mongodb connecton url for mongodb atlas (cloud)
const mongoURL ='mongodb+srv://Dheeraj1001:Dheeraj12345@hotel.7qgg3.mongodb.net/'

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