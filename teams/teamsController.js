//let paises = require ("../data/paises")
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
  
    let dbResponse = null;
    if(req.query.title){
        dbResponse = await paisByDt(req.query.title)
    }  else {
        dbResponse = await getAllCountries();
    }
    if (dbResponse instanceof Error) return next(dbResponse);
      dbResponse.length ? res.status(200).json(dbResponse) : next();
};   
     

const paisByGrupo = async (req,res,next)=>{
    if(!isNaN(req.params.id)) { 
        return res.status(400).json({message:"Grupo must be one letter from A to H"})
    } 
    const dbResponse = await getByGrupo(req.params.grupo) 
    console.log(req.params.grupo)
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
    console.log(dbResponse)
   
};


const deletePaisById = async(req,res,next) =>{
    if(isNaN(+req.params.id)) {
        return res.status(400).json({message:"Id must be a positive integer"})
    }
        const dbResponse = await deletePais(+req.params.id)
    if(dbResponse  instanceof Error) return next(dbResponse);
        dbResponse.affectedRows ? res.status(204).end() : next()
        
};


module.exports = {allPaises, paisById, paisByGrupo, deletePaisById, editPaisByName, getPaisByDt}