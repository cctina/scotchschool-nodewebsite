// require module express, path
const express = require('express');
const path = require('path');

// Create our router object
var router = express.Router();

// exports our router
module.exports = router;

// Route for our homepage
router.get('/', function (req, res) {
	res.render('pages/home');
})

// Route for our about page
router.get('/about', function (req, res) {
	var users = [ 
		{ name: "Holly", email: "holly@gmail.com", avatar: "http://placekitten.com/1000/1000" }, 
		{ name: "Eric",  email: "eric@gmail.com",  avatar: "http://placekitten.com/1100/1100" }, 
		{ name: "Alice", email: "alice@gmail.com", avatar: "http://placekitten.com/700/700" }, 
		{ name: "Ado",   email: "ado@gmail.com",   avatar: "http://placekitten.com/800/800" }
	];

	res.render('pages/about', { users: users });
});

// Route for our contact page
router.get('/contact', function (req, res) {
	// res.send("Hey, welcome to contact me!");
	// res.sendFile(path.join(__dirname, '../contact.html'));
	res.render('pages/contact');
});
router.post('/contact', function (req, res) {
	
});
