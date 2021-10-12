const express = require('express')

const app = express()

const PORT = 5300

require('./helpers/mongodb_init')

const authRoute = require('./routes/auth')

// Common middleware
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

// Route middlewares
app.use('/api/user', authRoute)

// Home route
app.get('/', (req, res) =>{
    res.send("Hello World!")
})

// Bind and listen the connections on the specified host and port
app.listen(PORT, () => {
    console.log(`Server on Port : ${PORT}`)
})