const bcrypt = require("bcrypt");
const saltRounds = 10;

const hashPass = async(password)=> {
    const encryptPassword =  await bcrypt.hash(password, saltRounds)
    return encryptPassword
};

const comparePass = async(originalPassword, hashedPass) =>{
    const finalPassword = await  bcrypt.compare(originalPassword, hashedPass)
    return finalPassword
};

module.exports = {hashPass, comparePass}