require("dotenv").config()
require("./data/config")
const express = require ("express")
const server = express()
const port = process.env.port || 8000
 

server.use(express.json())
server.use(express.urlencoded({extended: true}))

server.get("/", (req, res)=>{
   const front = `<h1>APi</h1>
               <h3>Mundial Qatar 2022</h3>`
   res.send(front)
});


server.use("/paises", require("./teams/teamsRouter"))


server.use("/users", require("./users/usersRoute"))



server.use((req, res, next)=>{
    let error = new Error("Resource not found")
    error.status = 404
    next(error)
});

server.use((error, req, res, next) =>{
    if(!error.status) error.status = 500;
    res.status(error.status).json({status: error.status, message: error.message})
})

server.listen(port, (err) => {
    err ? console.log(`Error: ${err}`) : console.log(`App corre en http://localhost:${port}`)
});

