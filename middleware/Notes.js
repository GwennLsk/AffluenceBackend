const _= require('lodash');
const {connection} = require("./db/dbconnect");

// CREATE
function addNote(req, res) {
    connection.query('INSERT INTO `node_affluences`.`notes` (`title`, `description`, `echeance`) ' +
        'VALUES ('+req.title+','+req.desc+' ,'+req.date+' );', function (error, results, fields) {
        if (error) throw error;
        console.log('added one note !');
    });


}

// READ
function getNotes(req, res) {
    connection.query('SELECT * FROM node_affluences.notes;', function (error, results, fields) {
        if (error) throw error;
        res.send(results)
    });

}

function getOneNote(req, res) {

}

UPDATE `node_affluences`.`notes` SET `description`='tes' WHERE `idnotes`='1';
// UPDATE
function editNote(req, res) {
    connection.query('UPDATE `node_affluences`.`notes` SET `title`='+title+', `description`='+desc+', `echeance`='+date+' WHERE `idnotes`='1'; +
        'VALUES ('+req.title+','+req.desc+' ,'+req.date+' );', function (error, results, fields) {
        if (error) throw error;
        console.log('Connected to DB !');
    });

}

// DELETE
function deleteNote(req, res) {


}


exports.addNote = addNote;
exports.getNotes = getNotes;
exports.getOneNote = getOneNote;
exports.editNote = editNote;
exports.deleteNote = deleteNote;
