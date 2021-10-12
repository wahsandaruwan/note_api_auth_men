// Check email already exist
const emailExistInDB = async (User, userEmail) => {
    const isExist = await User.findOne({email: userEmail})
    return isExist
}

module.exports.emailExistInDB = emailExistInDB