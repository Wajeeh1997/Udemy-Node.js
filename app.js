// Importing the HTTP module
const http = require('http');

// Define the host and port
const hostname = '127.0.0.1';
const port = 3000;

// Create a server instance
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  // Send the response body "Hello World"
  res.end('This world is exactly like me and i am like Jawwad Shamsi\n');
});

// Start the server and listen for incoming connections
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
