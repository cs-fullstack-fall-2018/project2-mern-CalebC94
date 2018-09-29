// We first need to load our mongoose data model
const Todos = require('../models/todoModel');

// Include body parser
const bodyParser = require('body-parser'); // In node_modules
const moment = require('moment');

module.exports = function (app) {

    app.use(bodyParser.json()); // Use body parser middleware
    app.use(bodyParser.urlencoded({extended: true})); // Parse out any JSON from body and handle URL encoded data

    //  Add a method to get all todos for a particular User (uname)
    app.get('/api/journal/:uname', function (req, res) {

        // ROUTE: GET a user's list of todos
        Todos.find({username: req.params.uname}, function (err, todos) { //Use the find method on the data model to search DB
            if (err) {
                throw err; // If we get an error then bail
            }
            // Use Express to send the JSON back to the client in the web response
            res.send(todos);
        });

    });

    app.get('/api/getall', function (req, res) {

        // ROUTE: GET a user's list of todos
        Todos.find({}, function (err, todos) { //Use the find method on the data model to search DB
            if (err) {
                throw err; // If we get an error then bail
            }
            // Use Express to send the JSON back to the client in the web response
            res.send(todos);
        });

    });

// ROUTE: GET a specific ToDo list item by it's record ID
app.get('/api/journal/:id', function (req, res) {

    Todos.findById({_id: req.params.id}, function (err, todo) { //Use the findID method on the data model to search DB
        if (err) {
            throw err; // If we get an error then bail
        }
        // Use Express to send the JSON back to the client in the web response
        res.send(todo);
    });

});

// ROUTE: POST (create) a new Todo item to my list
app.post('/api/journal', function (req, res) {
    const newTodo =
        Todos({
            username: req.body.username,
            title: req.body.title,
            journalEntry: req.body.journalEntry,
            date: req.body.date
        });

    newTodo.save(function (reyError) {
        if (reyError) {
            throw reyError; // If we get an error then bail
        }
        // Use Express to send a simple SUCCESS message
        res.json({result: 'Ok'});
    });

});

};