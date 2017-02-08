// require module express, path
const express = require('express');
const path = require('path');

// Create our router object
var router = express.Router();

// exports our router
module.exports = router;

// Route for our homepage
router.get('/', function (req, res) {
	// res.send('Hello world!');
	// res.sendFile(path.join(__dirname, '../index.html'));
	res.render('pages/index');
})

// Route for our about page
router.get('/about', function (req, res) {
	// res.send("Hi! It's an about page!");
	// res.sendFile(path.join(__dirname, '../about.html'));
	res.render('pages/about');
});

// Route for our contact page
router.get('/contact', function (req, res) {
	// res.send("Hey, welcome to contact me!");
	// res.sendFile(path.join(__dirname, '../contact.html'));
	res.render('pages/contact');
});
router.post('/contact', function (req, res) {
	
});
