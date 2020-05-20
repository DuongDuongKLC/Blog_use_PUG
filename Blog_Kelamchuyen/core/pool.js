const util = require('util');
const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'sake',
    password: 'sake',
    database: 'blog_kelamchuyen'
});

pool.getConnection((err, connect)=>{
    if(err)
        console.error("Something went wrong connecting to the database ... ");
    if(connect)
        connect.release();
});
pool.query = util.promisify(pool.query);
module.exports = pool;