const {check} = require('express-validator')

// Check user exist with an email
const emailExistInDB = async (User, userEmail) => {
    const userExist = await User.findOne({email: userEmail})
    return userExist
}

// Validate registration
exports.validateRegister = [
    check('name').trim().not().isEmpty().isLength({min: 6, max: 100}).withMessage('Name must be within 6 to 100 characters!'),
    check('email').normalizeEmail().isEmail().withMessage('Invalid email'),
    check('password').trim().not().isEmpty().isLength({min: 6, max: 100}).withMessage('Password must be within 6 to 100 characters!'),
    check('retypePass').trim().not().isEmpty().custom((value, {req}) => {
        if(value !== req.body.password){
            throw new Error('Both password should be matched!')
        }
        return true
    })
]

module.exports.emailExistInDB = emailExistInDB
module.exports.regValidation = regValidation