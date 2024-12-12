const fs = require('fs');

fs.watch('example.txt', (eventType, filename) => {
    if (filename) {
        console.log(`File ${filename} changed with event: ${eventType}`);
    }
});
