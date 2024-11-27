const pool = require('../config/db');

const selectAll = async () => {
    const result = await pool.query('select * from products');
    return result[0];
}

module.exports = {
    selectAll
}