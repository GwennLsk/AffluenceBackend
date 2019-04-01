var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : null,
});
let dbname = "bonjour";

connection.connect();


connection.query('CREATE SCHEMA IF NOT EXISTS ' + dbname + ';' , function (error, results, fields) {
    if(error) {
        throw error
    }
    connection.changeUser({database: dbname}, err => {
        if(err) throw err;
        else console.log("Connected to " + connection.config.database + " ! ")
    });
});

module.exports = {connection};
