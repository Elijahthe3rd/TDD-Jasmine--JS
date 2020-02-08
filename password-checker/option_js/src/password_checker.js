const existsReg = /^\s|\S+$/g
const upperCaseReg = /[A-Z]/g
const lowerCaseReg = /[a-z]/g
const digitReg = /\d+/g
const lengthReg = /^[\s\S]{9,}$/g
const specialCharsReg = /[^\s\w]|_/g

const jsonErrors = require('../../common/errors.json')

let passwordIsValid = (password) => {
    if (password === "")
        throw new Error(jsonErrors.exists)
    if (!password.match(lengthReg))
        throw new Error(jsonErrors.length)
    if (!password.match(upperCaseReg))
        throw new Error(jsonErrors.uppercase)
    if (!password.match(lowerCaseReg))
        throw new Error(jsonErrors.lowercase)
    if (!password.match(digitReg))
        throw new Error(jsonErrors.digits)
    if (!password.match(specialCharsReg))
        throw new Error(jsonErrors.specialchars)

    return true
};

let passwordIsOk = (password) => {
    if (password === "" || password.length <= 8) return false

    let conditions = [existsReg, lengthReg, upperCaseReg, lowerCaseReg, digitReg, specialCharsReg]
    let totalConditionsMet = 0
    for (let i = 0; i < conditions.length; i++) {
        if (password.match(conditions[i])) totalConditionsMet += 1
    }

    return totalConditionsMet >= 3
}

module.exports = {
    passwordIsValid,
    passwordIsOk
}

// console.log(passwordIsOk("ElijahNoko_4"))
// console.log(passwordIsValid("eAa-a1aas"))
// console.log(passwordIsOk("aaaafg"))
// console.log(passwordIsOk('12345678]Dd'))
// should be true