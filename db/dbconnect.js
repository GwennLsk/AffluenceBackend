var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : null,
    database : 'node_affluences'
});

connection.connect();

let SelectTable = "SELECT * FROM node_affluences.notes;";

let CreateTable = "CREATE TABLE `node_affluences`.`notes` (\n" +
    "  `idnotes` INT NOT NULL AUTO_INCREMENT,\n" +
    "  `title` VARCHAR(45) NULL,\n" +
    "  `description` VARCHAR(45) NULL,\n" +
    "  `echeance` DATETIME NULL,\n" +
    "  PRIMARY KEY (`idnotes`));"

    connection.query(SelectTable, function (error, results, fields) {
        if (error) throw error;
        console.log('Table  `note` created ! ');
    });


module.exports = {connection}

connection.end();
