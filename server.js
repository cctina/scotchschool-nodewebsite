// Import http module
const http = require('http');

// handle requests/responses
var handleRequest = function (request, response) {
	// Return a string
	response.end('Hello world!');
};

// Create http server
const server = http.createServer(handleRequest);

// Start server & listen to port xxx
server.listen(8080, function () {
	console.log('Listen to port 8080');
});