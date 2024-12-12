console.time('Execution Time');

console.log('Start logging...');

console.info('Information message');

console.warn('Warning message');

const name = "user";
console.error(`user ${name} is found`);

console.error('user ${name}');

const username = 'JohnDoe';
console.error(`User ${username} could not be found.`);

console.group('Group Example');
console.log('Message inside group');
console.groupEnd();

console.group('User Details');
console.log('Name: Alice');
console.log('Age: 25');
console.groupEnd();




// -----------Assert-----------------------------------

const x = 5;

// Logs an error message because the condition is false.
console.assert(x > 10, 'x is not greater than 10');

// Does nothing because the condition is true.
console.assert(x < 10, 'x is not less than 10');

// -----------------------------------------------------

const users = [
    { name: 'Rayan', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'sam', age: 25 },
    { name: 'Alice', age: 30 }
  ];
  console.table(users);
  console.table(users, ['name']);


  const someDebugInfo = "Debugging error";
  console.debug('Debugging details:', someDebugInfo);

  console.timeEnd('Execution Time');