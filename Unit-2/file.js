const fs = require('fs');
const readline = require('readline');

// Create an interface to read input from the console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask for file name and content to write into the file
rl.question('Enter the filename to save the input (e.g., output.txt): ', (fileName) => {
    rl.question('Enter the content you want to save in the file: ', (content) => {
        // Write content to the specified file
        fs.writeFile(fileName, content, 'utf8', (err) => {
            if (err) {
                console.error('Error writing to file:', err);
            } else {
                console.log(`Content successfully saved to "${fileName}"`);
            }
            rl.close();
        });
    });
});
