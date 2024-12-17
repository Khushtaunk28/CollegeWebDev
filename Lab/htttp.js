// Load the http module to create an HTTP server
const http = require('http');

// Create an HTTP server that listens on port 8000
const server = http.createServer((req, res) => {
  // Check if the request is for the root URL (/)
  if (req.url === '/') {
    // Respond with a welcome message
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to Nodejs');
  } else {
    // For all other routes, return a 404 status with a custom message
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found: The page you are looking for does not exist.');
  }
});

// Make the server listen on port 8000
server.listen(8000, () => {
  console.log('Server is listening on port 8000');
});
