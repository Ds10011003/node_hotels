const express = require('express')
const app = express()
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
const PORT = process.env.PORT||3000;  // if on host on server it get the port number and if on local then run 3000


const menu = require('./models/menu');
//const person =require('./models/person');

app.get('/', function (req, res) {
  res.send('Welcome to our hotel... what would you like to eat')
})
 

// app.post('/person',async (req,res)=>{
//    try{
//     const data = req.body //assumng the request body contans the person data
//     //create a new person document usng mongoose model
//     const newPerson = new person(data);
     
//     //save the new person n database
//     const savedPerson = await newPerson.save();
//     console.log('data saved');
//     res.status(200).json(savedPerson);
//    }
//    catch(err){
//       console.log(err);
//       res.status(500).json({error:'internal server error'});
//    }
// })

// // get method to get the person
// app.get('/person',async (req,res)=>{
//     try{
//       const data =await person.find();
//       console.log('data fetched');
//       res.status(200).json(data);
//     }catch(err){
//       console.log(err);
//       res.status(500).json({error:'internal server error'});
//     }
// })

app.post('/menu',async (req,res)=>{
   try{
      const order = req.body
      const neworder = new menu(order);
      const savedmenu = await neworder.save();
      console.log('data saved');
      res.status(200).json(savedmenu);
   }catch(err){
      console.log(err);
      res.status(500).json({error:'internal server error'});
   }
})

app.get('/menu',async (req,res)=>{
    try{
      const data = await menu.find();
      console.log('data fetched');
      res.status(200).json(data);
    }catch(err){
       console.log(err);
       res.status(500).json({error:'internal server error'});
    }
})


//paramerterze APi , :worktype - where we give any specific work to fetch all the data related to that work
// if parameter(worktype) change then url change 
// app.get('/person/:worktype',async (req,res)=>{
//       try{
//          const worktype = req.params.worktype;
//         if(worktype=='chef'||worktype=='waiter'||worktype=='manager'){
//            const data = await person.find({work:worktype});
//            console.log('data fetched');
//            res.status(200).json(data);
//           }
//           else{
//              res.status(404).json({error:'404 not found'});
//           }
//         }catch(err){
//            console.log(err);
//            res.status(500).json({error:'internal server error'});
//         }
// })

// import the router files
const personRoutes = require('./routes/personRoutes');
//use the router
app.use('/person',personRoutes);

app.listen(PORT,()=>{
    console.log('run port 3000')
}) 


// so by doing above get post and all crud operations we have many end points(code) like above and at server such 
// large code is bad practice for maintain or readability of code 
// As we see we can make 10 endpoints for menu,person and in large companies there is lots of things to do so here the 
// concept of routers comes in .........(personRoutes.js) , we copy all commented data into personRoutes.js
// we can also do the routing separate file for menu similar as we do with person