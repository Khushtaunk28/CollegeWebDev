console.time("User Processing Time"); // Start timing the process

// Starting the system
console.log("System initialized...");
console.info("Connecting to the user database...");

// Simulate fetching data from the database
console.log("Fetching user list...");
const users = [
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", age: 17 },
  { id: 3, name: "Charlie", age: 25 }
];
console.table(users, ["id", "name", "age"]); // Display the user list in a table

// Checking if new user data is valid
console.group("New User Registration");
const newUser = { id: 4, name: "David", age: 15 };
console.log("New User Details:", newUser);

console.warn(
  `Age validation warning: User '${newUser.name}' is under 18 and may not be eligible.`
);
console.assert(
  newUser.age >= 18,
  `Validation failed: User '${newUser.name}' must be at least 18 years old.`
);
console.groupEnd();

// Simulating a database save operation
console.group("Database Operation");
try {
  console.log("Saving new user to the database...");
  if (newUser.age < 18) throw new Error(`Cannot save user '${newUser.name}' under 18.`);
  console.log(`User '${newUser.name}' saved successfully.`);
} catch (error) {
  console.error(`Error: ${error.message}`);
}
console.groupEnd();

// Debugging system configuration
const debugInfo = {
  systemVersion: "1.0.0",
  databaseStatus: "Connected",
  lastOperation: "Save User"
};
console.debug("Debug Information:", debugInfo);

// Finalizing the process
console.log("System shutting down...");
console.timeEnd("User Processing Time"); // End timing the process
