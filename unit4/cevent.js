const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

// Define a listener for a custom event
eventEmitter.on('dataReceived', (data) => {
    console.log(`Data received: ${data}`);
});

// Trigger the custom event
eventEmitter.emit('dataReceived', 'Node.js is awesome!');
