const { selectAll } = require("../models/products.model");

const getAll = async (req, res, next) => {
    try {
        const result = await selectAll();
        res.json(result);
    } catch (error) {
        // Delegamos la gestión del error al 
        // manejador genérico de errores de app.js
        next(error);
    }
}

module.exports = {
    getAll
}