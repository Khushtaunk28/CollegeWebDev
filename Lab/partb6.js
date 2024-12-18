import React from 'react';

function DepartmentList() {
  // List of departments
  const departments = ['Human Resources', 'Finance', 'Engineering', 'Marketing', 'Sales'];

  return (
    <div>
      <h2>Department List</h2>
      {/* Unordered list */}
      <ul>
        {departments.map((department, index) => (
          <li key={index}>{department}</li>
        ))}
      </ul>
    </div>
  );
}
export default DepartmentList;
