const pool = require ("../data/config")

const getAllUsers = async() => {
    const query = "SELECT * FROM users"
    try{
        return await pool.query(query)
    } catch (error) {
       error.message = error.code
       return error
    }
};

const getUserById = async (id) =>{ 
    const query = `SELECT * FROM users WHERE id = ${id}`
    try{
        return await pool.query(query)
    } catch (error) {
        error.message = error.code
       return error
    } 
};

const registerUser = async (user) =>{
    const query = `INSERT INTO users SET ?`
    try{
        return await pool.query(query, user)
    } catch (error) {
        error.message = error.code
       return error
    }
};

const loginUser = async (email) =>{
    const query =`SELECT * FROM users  WHERE email = "${email}"`
    try{
        return await pool.query(query)
    } catch (error) {
        error.message = error.code
       return error
    }
};



module.exports = {getAllUsers, getUserById, loginUser, registerUser};