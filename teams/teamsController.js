//let paises = require ("../data/paises")
const { end } = require("../data/config");
const { findPaisById } = require("../functions")
const { getAllCountries, getPaisById, getByGrupo, editPais, paisByDt, deletePais} = require("./teamsModel");


const allPaises = async(req,res, next)=>{
    const dbResponse = await getAllCountries()
    dbResponse instanceof Error ? next(dbResponse) : res.status(200).json(dbResponse)
    
};

const paisById = async(req, res, next) => {
    if(isNaN(+req.params.id)) {
        return res.status(400).json({message:"Id must be a positive integer"})
    }
    const dbResponse = await getPaisById(+req.params.id)
    if (dbResponse instanceof Error) return next(dbResponse);
    dbResponse.length ? res.status(200).json(dbResponse) : next()
    
};

const getPaisByDt = async (req, res, next) =>{
    console.log(req.query)
    res.send("Hola")
};

const paisByGrupo = async (req,res,next)=>{
    if(req.params.grupo.length >1 ) {
        return res.status(400).json({message:"Grupo must be one letter from A to H"})
    } 
    const dbResponse = await getByGrupo(req.params.grupo) 
    if (dbResponse instanceof Error) return next(dbResponse);
    dbResponse.length ? res.status(200).json(dbResponse) : next()
};

const editPaisByName = async ( req, res, next)=>{
    if(!isNaN (req.params.pais)) {
        return res.status(400).json({message:"Name must be a string"})
}   
    const dbResponse = await editPais(req.params.pais, req.body)
   if (dbResponse instanceof Error) return next(dbResponse);
   dbResponse.affectedRows ? res.status(200).json(req.body) : next()
   
};


const deletePaisById = async(req,res,next) =>{
    if(isNaN (+req.params.id)) return;
        const dbResponse = await deletePais(+req.params.id)
    if (dbResponse  instanceof Error) return next(dbResponse);
        dbResponse.affectedRows ? res.status(204).end() : next()
       console.log(end)
};


module.exports = {allPaises, paisById, paisByGrupo, deletePaisById, editPaisByName, getPaisByDt}