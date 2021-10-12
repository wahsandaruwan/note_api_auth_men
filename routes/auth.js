const express = require('express')

const router = express.Router()

const User = require('../model/User')

const {consValidationErr} = require('../validation_cons')

// Register router
router.post('/register', async (req, res) => {
    // Create a new user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })

    try{
        const registeredUser = await user.save()
        res.send(registeredUser)
    }catch(err){
        res.status(400).send(consValidationErr(err))
        console.log(consValidationErr(err))
    }
})

module.exports = router