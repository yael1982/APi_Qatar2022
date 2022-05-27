const pool = require ("../data/config");

const getAllCountries = async() => {
    const query = "SELECT * FROM paises"
    try{
        return await pool.query(query)
    } catch (error) {
        error.status = 500
        error.message = error.code
        return error
    }
};

const getPaisById = async (id) =>{
    const query = `SELECT * FROM paises WHERE id = ${id}`;
    try{
        return await pool.query(query)
    } catch (error) {
        return { "error": error.code}
    }
};

const getByGrupo = async (grupo) =>{
    //console.log(typeof(grupo))
    const query = `SELECT * FROM paises WHERE grupo = "${grupo}"`;
    try{
        return await pool.query(query)
    } catch (error){
        return {"error": error.code}
    }
};
const editPais= async (pais,name) =>{
    
    const query = `UPDATE paises SET ? WHERE pais = "${pais}"`;
    try{
        return await pool.query(query, name)
    }catch (error) {
        return{"error": error.code}
    }
};

    
const paisByDt = async (dt, data)=> {
    const query = `SELECT * FROM paises WHERE dt = "${dt}`
    try{
        return await pool.query(query, data)
    }catch (error) {
        return{"error": error.code}
    }

}
const deletePais = async (id) =>{
    const query = `DELETE FROM paises WHERE id = ${id}`;
    try{
        return await pool.query(query)
    } catch (error) {
        return {"error": error.code}
    }
}

module.exports = {getAllCountries, getPaisById, getByGrupo, editPais,paisByDt, deletePais};