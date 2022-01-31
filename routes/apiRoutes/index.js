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

module.exports = app;

