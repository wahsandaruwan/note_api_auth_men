const express = require('express')

const router = express.Router()

const User = require('../model/User')

const {emailExistInDB} = require('../validations')

const bcrypt = require('bcrypt')

const multer = require('multer')

// Image upload
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './uploads/')
    },
    filename: (req, file, callback) => {
        callback(null, Date.now() + file.originalname)
    }
})

const maxSize = 1 * 1024 * 1024
const uploadImage = multer({
    storage: storage,
    limits: { fileSize: maxSize }
})

// Register router
router.post('/register', uploadImage.single('image'), async (req, res) => {
    // Data
    const name = req.body.name
    const email = req.body.email
    const hashedPass = req.body.password !== undefined ? await bcrypt.hash(req.body.password, 8) : undefined
    const profileImage = req.file ? req.file.filename : undefined

    // Create a new user
    const user = new User({
        name: name,
        email: email,
        password: hashedPass,
        profileImage: profileImage
    })

    try {
        // Check email already exist in db
        if (await emailExistInDB(User, req.body.email)) {
            res.status(400).send('Email already exist!')
        }
        else {
            const registeredUser = await user.save()
            res.send(registeredUser)
        }
    } catch (err) {
        res.status(400).send(err.message)
    }

})

// Login router
router.post('/login', async (req, res) => {
    // Check email already exist in db
    if (user = await emailExistInDB(User, req.body.email)) {
        // Check the password matches
        const passOk = await bcrypt.compare(req.body.password, user.password)
        if (!passOk) {
            res.status(400).send('Wrong password!')
        }
        else {
            res.send('Logged In!')
        }
    }
    else {
        res.status(400).send('Wrong email!')
    }
})

module.exports = router