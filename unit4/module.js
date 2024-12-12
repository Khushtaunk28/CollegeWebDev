const fs = require('fs');
const http = require('http');
const os = require('os');

// Step 1: Log system information on server startup using the 'os' module
console.log('System Information:');
console.log(`Operating System: ${os.type()} ${os.release()}`);
console.log(`CPU Architecture: ${os.arch()}`);
console.log(`Total Memory: ${os.totalmem()} bytes`);
console.log(`Free Memory: ${os.freemem()} bytes`);

// Step 2: Write some initial content to a file using the 'fs' module
const fileName = 'content.txt';
const content = 'Welcome to Node.js! This is the file content.\n';

fs.writeFile(fileName, content, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
    } else {
        console.log(`File '${fileName}' created successfully.`);
    }
});

// Step 3: Create an HTTP server using the 'http' module
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        // Read the file content when the server is accessed
        fs.readFile(fileName, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error reading file.\n');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end(data);
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404: Page Not Found\n');
    }
});

// Start the server and listen on port 3000
const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
