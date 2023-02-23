const express = require('express')
const flightRouter = express.Router()
const {flightModel}= require('../Model/flight.model')


flightRouter.get('/flights/:id', async (req, res) => {
    const id=req.params.id
  try{
    const data = await flightModel.find({_id:id});
    res.status(200).send(data);
  }
     catch (error) {
        res.send("Error: Please Registed Again")
    }
})

flightRouter.get('/flights', async (req, res) => {
    try{
      const data = await flightModel.find({});
      res.status(200).send(data);
    }
       catch (error) {
          res.send("Error: Please Registed Again")
      }
  })


flightRouter.post('/flights', async (req, res) => {
    const { airline, flightNo, departure, arrival, departureTime, arrivalTime, seats, price} = req.body;
  try{
    const flights = new flightModel({airline, flightNo, departure, arrival, departureTime, arrivalTime, seats, price});
    await flights.save();
    res.status(201).send("Flights Added successfull")
  }
     catch (error) {
        console.log(error);
        res.send("Error : Please Add Again")
    }
})


flightRouter.patch('/flights/:id', async(req,res)=>{
    const id=req.params.id
    let data = req.body;
    try {
        await flightModel.findByIdAndUpdate({_id:id}, data)
        res.status(204).send("Flights Updated successfull")
      
    
       
        }
        
     catch (error) {
        console.log("Error in Updating")
        res.send(error)
    }
})
flightRouter.delete('/flights/:id', async(req,res)=>{
    const id=req.params.id
    try {
        await flightModel.findByIdAndDelete({_id:id})
        res.status(202).send("Flights Deleted successfull")
        }
        
     catch (error) {
        console.log("Error in Deleting")
        res.send(error)
    }
})

module.exports={
    flightRouter
}

