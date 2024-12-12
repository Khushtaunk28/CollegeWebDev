var fs = require('fs')
fs.appendFile('example.txt', 'Welcome to node!!!',function(err){
if (err) {
console.error('Error writing to file:', err);
} else {
console.log('File created successfully!');
}
})