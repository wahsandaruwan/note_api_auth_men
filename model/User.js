const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'User name is required!'],
        min: [6, 'Name is too short!'],
        max: [100, 'Name is too long!']
    },
    email:{
        type: String,
        required: [true, 'User email is required!'],
        validate: {
            validator: (email) => {
                const regEx = /^[a-zA-Z\d\._-]+@[a-zA-Z\d_-]+\.[a-zA-Z\d\.]{2,}$/
                return regEx.test(email)
            },
            message: 'Email is invalid!'
        }
    },
    password:{
        type: String,
        required: [true, 'User password is required!'],
        min: [6, 'Password is too short!'],
        max: [1000, 'Password is too long!']
    },
    date:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', userSchema)