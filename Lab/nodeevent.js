const EventEmitter = require('events');

// Create an instance of EventEmitter
const emitter = new EventEmitter();

// Define an event listener function
const eventListener = () => {
  console.log('Event triggered!');
};

// Add an event listener for the 'myEvent' event
emitter.on('myEvent', eventListener);

// Emit the 'myEvent' event
console.log('Emitting myEvent for the first time...');
emitter.emit('myEvent'); // This will trigger the event listener

// Remove the event listener for 'myEvent'
emitter.removeListener('myEvent', eventListener);

// Emit the 'myEvent' event again
console.log('Emitting myEvent for the second time...');
emitter.emit('myEvent'); // This will not trigger the event listener anymore
