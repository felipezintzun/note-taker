const app = require('express').Router();

let db = require ('../../db/db.json');
const fs = require ('fs')

app.get ('/notes', (req,res) => {
    db = JSON.parse (fs.readFileSync('./db/db.json', 'utf-8'))
    console.log(db, 'getroute')

    res.json(db)
})

module.exports = app;

