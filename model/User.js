const mongoose = require('mongoose')

// Create user schema/model with data validation
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
    profileImage:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('User', userSchema)