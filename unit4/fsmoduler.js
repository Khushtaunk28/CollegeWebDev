var fs = require('fs')
fs.readFile('example.txt', 'utf8', function(err, data) {
if (err) {
console.error('Error reading to file:', err);
} else {
console.log(data);
}
})