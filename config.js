const mysql = require('mysql');

//create connection
const db = mysql.createConnection({
    //local
    // host: '127.0.0.1',
    // user: 'root',
    // password: 'alok',
    // database: 'mydb'

    //Server
    host: '52.172.32.154',
    user: 'root',
    password: 'password',
    database: 'mydb'
});

module.exports = db;