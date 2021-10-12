const express = require('express')

const router = express.Router()

const User = require('../model/User')

const {consValidationErr} = require('../val_errs_cons')

const {emailExistInDB} = require('../validations')

const bcrypt = require('bcryptjs')

// Register router
router.post('/register', async (req, res) => {
    // Hashing password
    const salt_rounds = 8
    const hashPass = await bcrypt.hash(req.body.password, salt_rounds)

    // Create a new user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPass
    })

    try{
        // Check email already exist in db
        if(await emailExistInDB(User, req.body.email)){
            res.send('Email already exist!')
        }
        else{
            const registeredUser = await user.save()
            res.send(registeredUser)
        }
    }catch(err){
        res.status(400).send(consValidationErr(err))
        console.log(consValidationErr(err))
    }
})

module.exports = router