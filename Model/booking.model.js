const mongoose= require('mongoose');

const bookingSchema = mongoose.Schema({
    user:Object,
    flight: Object
})

const bookingModel= mongoose.model('booking', bookingSchema)

module.exports={
    bookingModel
}