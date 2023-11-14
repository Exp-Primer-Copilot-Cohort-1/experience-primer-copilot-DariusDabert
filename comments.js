// Create web server
var express = require('express');
var router = express.Router();

// Create a route for the path '/'
router.get('/', function(req, res) {
    res.send('Comments home page');
});

// Create a route for the path '/new'
router.get('/new', function(req, res) {
    res.send('Create a new comment');
});

// Create a route for the path '/edit'
router.get('/edit', function(req, res) {
    res.send('Edit a comment');
});

// Create a route for the path '/delete'
router.get('/delete', function(req, res) {
    res.send('Delete a comment');
});

// Export the router
module.exports = router;