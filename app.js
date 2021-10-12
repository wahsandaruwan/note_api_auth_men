const express = require('express')

const app = express()

const PORT = 3300

app.get('/', (req, res) =>{
    res.send("Hello World!")
})

// Bind and listen the connections on the specified host and port
app.listen(PORT, () => {
    console.log(`Server on Port : ${PORT}`)
})