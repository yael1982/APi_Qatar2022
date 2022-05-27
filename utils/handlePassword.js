const bcrypt = require("bcrypt");
const saltRounds = 10;

const hashPass = async(password)=> {
    const encryptPassword =  await bcrypt.hash(password, saltRounds)
    return encryptPassword
};

const comparePass = async(firstPassword, hashedPass) =>{
    const finalPassword = await  bcrypt.compare(firstPassword, hashedPass)
    return finalPassword
}

module.exports = {hashPass, comparePass}