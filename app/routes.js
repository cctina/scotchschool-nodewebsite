// require module express
const express = require('express');

// Create our router object
var router = express.Router();

// exports our router
module.exports = router;

// Route for our homepage
router.get('/', function (req, res) {
	res.send('Hello world!');
})

// Route for our about page
router.get('/about', function (req, res) {
	res.send("Hi! It's an about page!");
});

// Route for our contact page
router.get('/contact', function (req, res) {
	res.send("Hey, welcome to contact me!");
});
router.post('/contact', function (req, res) {
	
})
