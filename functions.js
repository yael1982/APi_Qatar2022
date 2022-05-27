const findPaisById = (id, arr) => {
    return arr.find((pais) => pais.id === id)
};



module.exports = { findPaisById }