const express = require('express')
const bookingRouter = express.Router()
const {bookingModel}= require('../Model/booking.model')

bookingRouter.post("/", async (req, res) => {
    const user_id = req.body.user_id;
    const flight_id = req.body.flight_id
    try {
        const new_booking = new bookingModel({
            user: { type: user_id, ref: 'User' },
            flight: { type: flight_id, ref: 'Flight' }
        });
        await new_booking.save();
        res.send({
            user: { type: user_id, ref: 'User' },
            flight: { type: flight_id, ref: 'Flight' }
        })
    } catch (error) {
        res.send(error)
    }
})
bookingRouter.get("/dashboard", async (req, res) => {
    const user_id = req.body.user_id;
    try {
        const booking = await bookingModel.find({user: { type: user_id, ref: 'User' }})
        res.send(booking)
    } catch (error) {
        res.send(error)
    }
})


module.exports={
    bookingRouter
}

