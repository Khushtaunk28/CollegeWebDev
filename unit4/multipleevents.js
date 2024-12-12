// Import the 'events' module
const EventEmitter = require('events');

// Create a new instance of EventEmitter
const eventEmitter = new EventEmitter();

// Event listener function
function onEventTriggered(message) {
  console.log(`Event triggered with message: ${message}`);
}

// Add an event listener
eventEmitter.on('customEvent', onEventTriggered);

// Emit the event (trigger the listener)
console.log('Emitting event...');
eventEmitter.emit('customEvent', 'Hello, this is a custom event!');

// Remove the event listener
eventEmitter.off('customEvent', onEventTriggered);

// Emit the event again (this time no listener will be triggered)
console.log('Emitting event again...');
eventEmitter.emit('customEvent', 'This will not be logged, since listener is removed.');
