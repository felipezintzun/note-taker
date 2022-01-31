const app = require('express').Router();

let db = require ('../../db/db.json');
const fs = require ('fs')

app.get ('/notes', (req,res) => {
    db = JSON.parse (fs.readFileSync('./db/db.json', 'utf-8'))
    console.log(db, 'getroute')

    res.json(db)
})

app.post ('/notes', (req,res) => {
    var noteId = Math.floor(Math.random() * 1001)
    db.push({
        id:noteId, 
        title: req.body.title,
        text: req.body.text
    })
    fs.writeFileSync('./db/db.json', JSON.stringify(db), function(error){
        if (error) throw error
    })
    console.log(db, 'postroute')

    res.json(db)
})

app.delete ('/notes/:id', (req,res) => {
    var noteId = req.params.id
    var currentNotes = db.filter(note => note.id != noteId) // Alternate use for loop - if statemenet check for id match and push to currentNotes
     db = currentNotes
  
    fs.writeFileSync('./db/db.json', JSON.stringify(db), function(error){
        if (error) throw error
    })
    console.log(db, 'deleteroute')

    res.json(db)
})

module.exports = app;

