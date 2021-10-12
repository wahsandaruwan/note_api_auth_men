const mongoose = require('mongoose')

const dotenv = require('dotenv')

dotenv.config()

// Connect to DB
const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_CON)
        console.log('Connected to DB!')
    }catch(err){
        console.log(err.message)
    }
}

dbConnection()