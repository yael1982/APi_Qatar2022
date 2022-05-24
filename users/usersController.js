//let users = require("../data/users");
//const { findUserById} = require("../functions");
const {getAllUsers, getUserById } = require("./usersModel");

const allUser = async (req,res,next)=>{
    const dbResponse = await getAllUsers()
    dbResponse.hasOwnProperty("error") ? res.status(500).json(dbResponse) : res.status(200).json(dbResponse)
};

const userById = async (req,res, next)=>{
    if(isNaN(+req.params.id)) {
        return res.status(400).json({message:"ID must be a positive integer"})
        }
        const dbResponse = await getUserById(+req.params.id) 
    
        if (dbResponse.hasOwnProperty("error")) return res.status(500).json(dbResponse);
        dbResponse.length ? res.status(200).json(dbResponse) : next()
};

const newUser = async (req,res)=>{
    const { name, username, email } = req.body
    if (!name || !username || !email && (name  === "" || username === "" || email === "")) {
    res.status(400).json({message: "All fields require"})
    }
   
    const dbResponse = await newUser(req.body)
    dbResponse.hasOwnProperty("error") ? res.status(500).json(dbResponse) : res.status(201).json(req.body)
};


module.exports = {allUser, userById, newUser};