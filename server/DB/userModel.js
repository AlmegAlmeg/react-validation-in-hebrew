const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        minlength: 2
    },
    userEmail: {
        type: String,
        required: true,
        minlength: 2
    },
    userPassword: {
        type: String,
        required: true,
        minlength: 3
    },
    isAcceptAds: {
        type: Boolean,
        default: true
    },
})

const User = mongoose.model('users', userSchema)

module.exports = User