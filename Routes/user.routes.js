const express = require('express')
const userRouter = express.Router()
const {UserModel}= require('../Model/user.model')
const jwt = require('jsonwebtoken')

userRouter.post('/register', async (req, res) => {
    const { name, email, password} = req.body;
  try{
    const user = new UserModel({name, email, password});
    await user.save();
    res.send("Registration successfull")
    
  }
     catch (error) {
        console.log(error);
        res.status(201).send("Error in registration. Please Registed Again")
    }
})


userRouter.post('/login', async(req,res)=>{
    let {email, password} = req.body;
    try {
        const user=await UserModel.find({email,password})
        if(user.length>0)
        {
            const token = jwt.sign({userID:user[0]._id},"Air")
            
            res.status(201).send({"msg":"Login successful",token})
               
            }
        
        
        else{
            res.send("Wrong Credential. Please Try Again")
        }
        
    } catch (error) {
        console.log("Error in Login")
        res.send(error)
    }
})

module.exports={
    userRouter
}

