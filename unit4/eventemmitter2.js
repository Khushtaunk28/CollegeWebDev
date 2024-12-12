const events = require('events');

// Create an EventEmitter instance
const eventEmitter = new events.EventEmitter();

// Create an event handler
const greetHandler = (name) => {
    console.log(`Hello, ${name}! Welcome to the Event-Driven World.`);
};

// Attach the event handler to the 'greet' event
eventEmitter.on('greet', greetHandler);

// Emit the 'greet' event with an argument
eventEmitter.emit('greet', 'NIE Mysuru');
