const express = require('express')

const router = express.Router()

const User = require('../model/User')

// Register router
router.post('/register', async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })

    try{
        const registeredUser = await user.save()
        res.send(registeredUser)
    }catch(err){
        res.status(400).send(err.message)
    }
})

module.exports = router