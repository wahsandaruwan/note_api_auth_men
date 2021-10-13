const joi = require('@hapi/joi')

// Check user exist with an email
const emailExistInDB = async (User, userEmail) => {
    const userExist = await User.findOne({email: userEmail})
    return userExist
}

// Validate registration
const regValidation = async (data) => {
    const schema = {
        name: joi.string().pattern(/^[a-zA-Z\s]{6,10}$/),
        email: joi.string().min(7).max(150).required().email(),
        password: joi.string().min(6).max(1000).required(),
        profileImage: joi.string().required()
    }
    
    return schema.validate(data)
}

module.exports.emailExistInDB = emailExistInDB
module.exports.regValidation = regValidation