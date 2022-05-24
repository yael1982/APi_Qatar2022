const pool = require ("../data/config")

const getAllUsers = async() => {
    const query = "SELECT * FROM users"
    result = await pool.query(query)
    return result
};

const getUserById = async (id) =>{  console.log(getUserById)

    const query = `SELECT * FROM users WHERE id = ${id}`
    try{
        return await pool.query(query)
    } catch (error) {
        return {"error": error.code}
    }
  
};





module.exports = {getAllUsers, getUserById};