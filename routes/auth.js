const express = require('express')

const router = express.Router()

const User = require('../model/User')

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
        console.log(registeredUser)
    }catch(err){
        // Construct validation errors
        let errors = err.message.replace('User validation failed: ', '')
        let errsArray = errors.split(/[:,]/)
        let onlyErrs = new Array()
        errsArray.forEach((value, index) => {
            if(index%2 === 1){
                onlyErrs.push(value.trimStart())
            }
        })
        console.log(onlyErrs)
        res.status(400).send(onlyErrs)
    }
})

module.exports = router