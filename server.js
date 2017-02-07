// // Import http module
// const http = require('http');

// // handle requests/responses
// var handleRequest = function (request, response) {
// 	// Return a string
// 	response.end('Hello world!');
// };

// // Create http server
// const server = http.createServer(handleRequest);

// // Start server & listen to port xxx
// server.listen(8080, function () {
// 	console.log('Listen to port 8080');
// });

//////////////////// EXPRESS /////////////////////////

const express = require('express');
const app = express();
const PORT = 8080;

// Start the server 
app.listen(PORT, function () {
	console.log('app started');
});

// Route our app
app.get('/', function (req, res) {
	res.send('Hello world!');
})