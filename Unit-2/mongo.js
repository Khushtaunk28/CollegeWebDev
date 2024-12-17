const { MongoClient } = require('mongodb');

// MongoDB Connection URL
const url = "mongodb://127.0.0.1:27017";
 // Default connection URL
const client = new MongoClient(url);

async function main() {
    try {
        // Connect to MongoDB server
        await client.connect();
        console.log("Connected successfully to MongoDB server.");

        // i. Create a new database named CollegeDB and collection named students
        const db = client.db("CollegeDB");
        const studentsCollection = db.collection("students");
        const coursesCollection = db.collection("courses");
        console.log('Database "CollegeDB" and collections created.');

        // ii. Insert three documents into the students collection
        await studentsCollection.insertMany([
            { name: "Alice", age: 19, sem: 3, usn: "USN001", grade: "A" },
            { name: "Bob", age: 17, sem: 2, usn: "USN002", grade: "B" },
            { name: "Charlie", age: 20, sem: 5, usn: "USN003", grade: "A" }
        ]);
        console.log("Inserted three documents into the students collection.");

        // iii. Insert multiple documents into the courses collection
        await coursesCollection.insertMany([
            { courseName: "Mathematics", courseCode: "MATH101", credits: 4 },
            { courseName: "Physics", courseCode: "PHY101", credits: 3 },
            { courseName: "English", courseCode: "ENG101", credits: 2 }
        ]);
        console.log("Inserted documents into the courses collection.");

        // iv. Retrieve all documents from the students collection
        console.log("All documents in the students collection:");
        const allStudents = await studentsCollection.find({}).toArray();
        console.log(allStudents);

        // v. Retrieve all documents where the age is greater than 18
        console.log("Students with age > 18:");
        const studentsAbove18 = await studentsCollection.find({ age: { $gt: 18 } }).toArray();
        console.log(studentsAbove18);

        // vi. Find all students with a grade of "A"
        console.log('Students with grade "A":');
        const gradeAStudents = await studentsCollection.find({ grade: "A" }).toArray();
        console.log(gradeAStudents);

        // vii. Find all courses with credits greater than or equal to 3
        console.log("Courses with credits >= 3:");
        const coursesWithCredits = await coursesCollection.find({ credits: { $gte: 3 } }).toArray();
        console.log(coursesWithCredits);

    } catch (error) {
        console.error("An error occurred:", error);
    } finally {
        // Close the connection
        await client.close();
        console.log("Connection closed.");
    }
}

// Run the script
main();
