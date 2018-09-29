// We first need to load our mongoose data model
const Todos = require('../models/todoModel');
const moment = require('moment');


module.exports = function(app) {
    // Add an API endpoint with some dummy data
    app.get('/api/journalEntry', function(req, res) {

        // seed database
        const starterTodos = [
            {
                username: 'testuser',
                title: 'Buy milk',
                journalEntry: false,
                date: moment()
            },
            {
                username: 'testuser',
                title: 'Feed dog',
                journalEntry: false,
                date: moment()
            },
            {
                username: 'testuser',
                title: 'Learn Node',
                journalEntry: false,
                date: moment()
            }
        ];

        // Use the mongo method create to create records fopr the test data. err will hold any errors after create
        // and results will show records created.
        Todos.create(starterTodos, function(err, results) {
            // Lets us confirm that the seed data added via mongoose without any errors
            res.send(results);
        });
    });

};