const _= require('lodash');
const {connection} = require("../db/MySQLConnect");
const CRUD = require("../db/CRUD")

function addNote(req, res) {
    CRUD.Create("notes", req.body)
        .then(result => res.send(result))
        .catch(err => res.send(err))

}

// READ
function getNotes(req, res) {
    CRUD.readAll("notes")
        .then((results) => {
            res.send(results)
        })
        .catch(err => res.send(err))

}

function getOneNote(req,res) {
    CRUD.readOne("notes", req.params.id)
        .then(result => res.send(result))
        .catch(err => res.send(err))
}

function editNote(req, res) {
    CRUD.Update("notes", req.body, req.params.id)
        .then(result => res.send(result))
        .catch(err => res.send(err))
}
function deleteNote(req, res) {
    CRUD.Delete("notes", req.params.id)
        .then(result => res.send(result))
        .catch(err => res.send(err))
}

module.exports = {
    addNote,
    getNotes: getNotes,
    getOneNote: getOneNote,
    editNote: editNote,
    deleteNote
}
