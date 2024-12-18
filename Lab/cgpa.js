// Define an array of student objects
const students = [
    { name: "Alice", marks: 95 },
    { name: "Bob", marks: 78 },
    { name: "Charlie", marks: 88 },
    { name: "Diana", marks: 92 },
    { name: "Eve", marks: 67 },
    { name: "Frank", marks: 98 },
  ];
  
  // Function to convert marks to CGPA (assuming CGPA = marks / 10)
  const marksToCGPA = (marks) => marks / 10;
  
  // Map to add CGPA to student objects
  const studentsWithCGPA = students.map((student) => ({
    ...student,
    cgpa: marksToCGPA(student.marks),
  }));
  
  // Filter students with CGPA >= 9
  const topStudents = studentsWithCGPA.filter((student) => student.cgpa >= 9);
  
  // Get the total count of students with CGPA >= 9 using reduce
  const topStudentCount = topStudents.reduce((count) => count + 1, 0);
  
  // Display students with CGPA >= 9
  console.log("Students with CGPA 9 or higher:");
  topStudents.forEach((student) =>
    console.log(`Name: ${student.name}, CGPA: ${student.cgpa.toFixed(2)}`)
  );
  
  // Display the total count
  console.log(`Total count of students with CGPA 9 or higher: ${topStudentCount}`);
  