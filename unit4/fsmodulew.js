var fs = require('fs')
fs.writeFile('example.txt','hello world',function(err){
if (err) {
console.error('Error writing to file:', err);
} else {
console.log('File created successfully!');
}
})