// Check user exist with an email
const emailExistInDB = async (User, userEmail) => {
    const userExist = await User.findOne({ email: userEmail })
    return userExist
}
