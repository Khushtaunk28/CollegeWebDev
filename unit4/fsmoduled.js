var fs = require('fs')
fs.unlink('example.txt', function(err){
console.log('Deleted')
})