const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'app_biblioteca',
    password: '@pp_b1bl10t3c@',
    database: 'biblioteca_pessoal',
    port: 3306
});

module.exports = pool;