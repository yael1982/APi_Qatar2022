
//const { findUserById} = require("../functions");
const {getAllUsers, getUserById, loginUser, registerUser} = require("./usersModel");
const {hashPass, comparePass} = require ("../utils/handlePassword")

const allUser = async (req,res,next)=>{
    const dbResponse = await getAllUsers()
    dbResponse instanceof Error ? next(dbResponse) : res.status(200).json(dbResponse)
};

const userById = async (req,res, next)=>{
    if(isNaN(+req.params.id)) {
        return res.status(400).json({message:"ID must be a positive integer"})
        }
        const dbResponse = await getUserById(+req.params.id) 
        if (dbResponse instanceof Error) { return next(dbResponse) };
        dbResponse.length ? res.status(200).json(dbResponse) : next()
};


const newUser = async(req, res, next) => { 
        console.log(req.body.file)
    const image = `http://localhost:3030/${req.file.filename}`
    const pass = await hashPass(req.body.password)
    const dbResponse = await registerUser({...req.body, password: pass, image}) 
     
    dbResponse instanceof Error ? next(dbResponse) : res.status(201).json(`User ${req.body.name} created!!`)
};

const signUp= async(req, res, next)=>{
    const dbResponse = await loginUser(req.body.email)
    
    if(!dbResponse.length) return next();
        if(await comparePass (req.body.password, dbResponse[0].password)){
        res.status(200).json({message:"OK"})
    } else{ 
        let error = new Error
        error.status = 401
        error.message = "Unauthorized"
        next(error)
    }   
        
     
    
};


module.exports = {allUser, userById, newUser, signUp};