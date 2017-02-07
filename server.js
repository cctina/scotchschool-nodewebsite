// Request our dependencies
const express = require('express');
const app = express();
const router = require('./app/routes');

// Configuration
const PORT = 8080;

// Route our app
app.use('/', router);

// Start the server 
app.listen(PORT, function () {
	console.log('app started');
});

