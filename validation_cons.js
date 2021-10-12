// Construct validation errors
const consValidationErr = (err) => {
    // Construct validation errors
    let errors = err.message.replace('User validation failed: ', '')
    let errsArray = errors.split(/[:,]/)
    let onlyErrs = new Array()
    errsArray.forEach((value, index) => {
        if(index%2 === 1){
            onlyErrs.push(value.trimStart())
        }
    })
    return onlyErrs
}

module.exports.consValidationErr = consValidationErr