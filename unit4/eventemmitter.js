console.log('Script started');

var events = require('events');
var eventEmitter = new events.EventEmitter();

var myEventHandler = function () {
    console.log('I hear a screaming!!!!!');
};

eventEmitter.on('scream', myEventHandler);

eventEmitter.emit('scream');

console.log('Script ended');
