const fs = require('fs');
const readline = require('readline');

// Create an interface for reading input from the console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to write data to the file
function writeToFile(data) {
    fs.writeFile('hello.txt', data, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log('Data written to hello.txt successfully.');
        }
    });
}

// Prompt user for input
rl.question('Enter student name: ', (name) => {
    rl.question('Enter subject: ', (subject) => {
        rl.question('Enter marks: ', (marks) => {
            const data = `Student Name: ${name}\nSubject: ${subject}\nMarks: ${marks}`;
            writeToFile(data);
            rl.close(); // Close the interface after completing input
        });
    });
});
