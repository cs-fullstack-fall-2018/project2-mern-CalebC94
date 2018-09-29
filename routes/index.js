var express = require('express');
var router = express.Router();
var Schema = required("../models/todoModel");

/* GET home page. */
router.get('/api/getall', function(req, res, next) {
    Schema.find().then(items => res.json(items));
});

router.get('/journal', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/api/journal', function(req, res) {
    const newModel = new Schema({
        username: req.body.username,
        title: req.body.title,
        journalEntry: req.body.journalEntry,
        date: Date
    })
    Schema.save().then(()=>res.send('post was successful'))
});

module.exports = router;
