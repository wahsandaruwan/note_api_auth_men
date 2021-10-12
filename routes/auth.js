const express = require('express')

const router = express.Router()

// Register router
router.post('/register', (req, res) => {
    res.send("This is register page!")
})

module.exports = router