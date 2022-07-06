const {check, validationResult} = require("express-validator")

const validatorNewUser=[
    check("name")
        .exists().withMessage("Name field is require")
        .trim()
        .isAlpha("es-ES", {ignore: ' ' }).withMessage("Only letters")
        .isLength({min:4, max:90}).withMessage("Name must be at least 4 characters long")
        .notEmpty().withMessage("Must complete field Name"),

    check("email")
        .exists().withMessage("Email field is require")
        .isEmail().withMessage("Must be a valid email adresse")
        .normalizeEmail(),

    check("password")
        .exists().withMessage("Password field is require")
        .isLength({min:8, max:15}).withMessage("Password must be at least 8 character long")
        .trim(),
    
    (req,res,next)=>{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
        }else {
            next()
        }
    }
    

]



module.exports = { validatorNewUser}