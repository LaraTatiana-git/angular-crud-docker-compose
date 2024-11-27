const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'db',
    user: 'developer',
    password: '1234',
    port: 3306,
    database: 'shop'
});

module.exports = pool.promise();