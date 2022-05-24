const findPaisById = (id, arr) => {
    return arr.find((pais) => pais.id === id)
};


/*const findUserById = (id, arr) =>{
    return arr.find((user) => user.id === id)
};*/


module.exports = { findPaisById}