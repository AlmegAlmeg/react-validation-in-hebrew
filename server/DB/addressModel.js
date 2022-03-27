const mongoose = require('mongoose')

const addressSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 2
    },
    lastName: {
        type: String,
        required: true,
        minlength: 2
    },
    city: {
        type: String,
        required: true,
        minlength: 2
    },
    address: {
        type: String,
        required: true,
        minlength: 2
    },
    houseNumber: {
        type: Number,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
        minlength: 8,
        maxlength: 10
    },
    createdBy: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
    apartmentNumber: String,
    apartmentCode: String,
})

const Address = mongoose.model('addresses', addressSchema)

module.exports = Address