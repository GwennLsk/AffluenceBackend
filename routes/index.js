var express = require('express');
var router = express.Router();
const Note = require("../controller/notes")

/* GET home page. */
router.get('/notes', Note.getNotes);
router.get('/notes/:id', Note.getOneNote);
router.post('/notes', Note.addNote);
router.patch('/notes/:id', Note.editNote);
router.delete('/notes/:id', Note.deleteNote);

module.exports = router;
