// Request our dependencies
const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const router = require('./app/routes');

// Configuration
const PORT = 8080;

// Use ejs and express layouts (Set view engine)
// *Need to go above router!
app.set('view engine', 'ejs');
app.use(expressLayouts);

// Route our app
app.use('/', router);

// Set static files (css, images, etc) location
app.use(express.static(__dirname + '/public'));

// Start the server 
app.listen(PORT, function () {
	console.log('app started');
});

