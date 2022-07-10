const jwt = require("jsonwebtoken");
const key = process.env.jwt_secret;


const tokenSign = async(user)=>{
    return jwt.sign(user, key, {expiresIn: "1h"});
};

const tokenVerify = async(token) => {
    try{
        return jwt.verify(token, key);
    }   catch (error) {
        return error;
    }
};





module.exports = {tokenSign, tokenVerify};