const express = require('express'); // routing concept is introduced in express.js
const router = express.Router();
//const mongoose = require('mongoose');
const person =require('./../models/person');

router.post('/',async (req,res)=>{
    try{
     const data = req.body //assumng the request body contans the person data
     //create a new person document usng mongoose model
     const newPerson = new person(data);
      
     //save the new person n database
     const savedPerson = await newPerson.save();
     console.log('data saved');
     res.status(200).json(savedPerson);
    }
    catch(err){
       console.log(err);
       res.status(500).json({error:'internal server error'});
    }
 })
 
 // get method to get the person
 router.get('/',async (req,res)=>{
     try{
       const data =await person.find();
       console.log('data fetched');
       res.status(200).json(data);
     }catch(err){
       console.log(err);
       res.status(500).json({error:'internal server error'});
     }
 })
 
 router.get('/:worktype',async (req,res)=>{
    try{
       const worktype = req.params.worktype;
      if(worktype=='chef'||worktype=='waiter'||worktype=='manager'){
         const data = await person.find({work:worktype});
         console.log('data fetched');
         res.status(200).json(data);
        }
        else{
           res.status(404).json({error:'404 not found'});
        }
      }catch(err){
         console.log(err);
         res.status(500).json({error:'internal server error'});
      }
})


//update data
router.put('/:id',async (req,res)=>{
    try{
        const personid = req.params.id;
        const updatedPersonData = req.body;

        //   // Validate ObjectId format
        // if (!mongoose.Types.ObjectId.isValid(personid)) {
        //     return res.status(400).json({ error: 'Invalid ID format' });
        // }

        const data = await person.findByIdAndUpdate(personid,updatedPersonData,{
            new:true, //return the updated document
            runValidators:true, //run mongoose validation
        })

        if(!data){
            return res.status(404).json({error:'person not found'});
        }
        console.log('data updated');
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'});
    }
})

//delete data 

router.delete('/:id',async (req,res)=>{
    try{
        const personid = req.params.id; //extract person's id from the URL parameter

        const data = await person.findByIdAndDelete(personid);

        if(!data){
            return res.status(404).json({error:'person not found'});
        }
        console.log('data deleted');
        res.status(200).json({message:'person deleted successfully'});
    }catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'});
    }
})
module.exports = router;

//i=