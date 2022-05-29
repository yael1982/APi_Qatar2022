const pool = require ("../data/config");

const getAllCountries = async() => {
    const query = "SELECT * FROM paises"
    try{
        return await pool.query(query)
    } catch (error) {
       
        error.message = error.code
        return error
    }
};

const getPaisById = async (id) =>{
    const query = `SELECT * FROM paises WHERE id = ${id}`;
    try{
        return await pool.query(query)
    } catch (error) {
       
        error.message = error.code
        return error;
    }
};

const getByGrupo = async (grupo) =>{
    //console.log(typeof(grupo))
    const query = `SELECT * FROM paises WHERE grupo = "${grupo}"`;
    try{
        return await pool.query(query)
    } catch (error) {
        error.message = error.code
        return error;
    }
};
const editPais= async (pais, name) =>{
    const query = `UPDATE paises SET ? WHERE pais = "${pais}"`; 
    try{
        return await pool.query(query, name)
    } catch (error) {
        error.message = error.code
        return error;
    }
};


const paisByDt = async (dt)=> {
    const query = `SELECT * FROM paises WHERE dt LIKE "%${dt}%"`;
    try{
        return await pool.query(query)
    } catch (error) {
        error.message = error.code
        return error;
    }

};

const deletePais = async (id) =>{
    const query = `DELETE FROM paises WHERE id = ${id}`;
    try{
        return await pool.query(query)
    } catch (error) {
       
        error.message = error.code
        return error;
    }
}

module.exports = {getAllCountries, getPaisById, getByGrupo, editPais, paisByDt, deletePais};