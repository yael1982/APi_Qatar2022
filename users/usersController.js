
//const { findUserById} = require("../functions");
const { getAllUsers, getUserById, loginUser, registerUser } = require("./usersModel");
const { hashPass, comparePass } = require ("../utils/handlePassword");
const { tokenSign } = require("../utils/handlerJWT")

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
        dbResponse.length ? res.status(200).json(dbResponse) : next();
};


const newUser = async(req, res, next) => { 
        console.log("hola")
    const image = `http://localhost:3030/${req.file.filename}`
    const pass = await hashPass(req.body.password);
    const dbResponse = await registerUser({...req.body, password: pass, image}); 
     if(dbResponse instanceof Error) return next(dbResponse);
     const user = {
        name: req.body.name,
        email: req.body.email,
     };
     const tokenData = {
        token: await tokenSign (user, "1h"),
        user,
     };
       res.status(201).json({user: req.body.name, Token_Info: tokenData});
};

const signUp= async(req, res, next)=>{
    const dbResponse = await loginUser(req.body.email);
    
    if(!dbResponse.length) return next();
    if(await comparePass (req.body.password, dbResponse[0].password)){
        const user = {
            id: dbResponse[0].id,
            name: dbResponse[0].name,
            email: dbResponse[0].email,
            image: dbResponse[0].image,
          };
        const tokenData ={
            token: await tokenSign(user, "30s"),
            user,
        };
        res
            .status(200)
            .json({message: `User ${user.name} LOgged in!`, Token_info: tokenData});
    } else{ 
        let error = new Error()
        error.status = 401;
        error.message = "Unauthorized";
        next(error);
    }   
        
     
    
};


module.exports = {allUser, userById, newUser, signUp};