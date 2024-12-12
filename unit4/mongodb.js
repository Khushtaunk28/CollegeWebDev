const { MongoClient } = require('mongodb');

// Connection URL and Database Name
const url = 'mongodb://localhost:27017';
const dbName = 'exampleDB';

// Connect to MongoDB
MongoClient.connect(url)
    .then((client) => {
        console.log('Connected to MongoDB');
        const db = client.db(dbName);
        const collection = db.collection('exampleCollection');

        // Perform a Read Operation
        return collection.find({}).toArray();
    })
    .then((docs) => {
        if (docs.length === 0) {
            console.log('No documents found in the collection.');
        } else {
            console.log('Documents:', docs);
        }
    })
    .catch((err) => {
        console.error('Error:', err);
    });
