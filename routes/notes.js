var express = require('express');
var router = express.Router();

const Note = require('../Note/lib')

router.post('/notes', Note.addNote)

//GET /menus
router.get('/notes', Note.getNotes)


// GET /menus/id
router.get('/notes/:id', Note.getOneNote)

// PATCH /menus/id
router.patch('/notes/:id', Note.editNote)

// DELETE /menus/id
router.delete('/notes/:id', Note.deleteNote)
/* GET users listing. */
// router.get('/', function(req, res, next) {
//     res.send('respond with a resource');
// });

module.exports = router;


