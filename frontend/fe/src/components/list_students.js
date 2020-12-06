import React from "react" 
import StudentEntry from "./student_entry";

function ListStudents() {
  var students = []
  var apiUrl = "http://127.0.0.1:8000/api/counselors/me/students/"
  fetch(apiUrl)
    .then((res) => res.json())
    .then((found_students) => {
      students = found_students;
    });

  var student_entries = students.map(student => {
    <StudentEntry counselor={student.counselor}/>
  })

  return (
    <div>
      HEY, 
      {student_entries}
    </div>
  );  
}

export default ListStudents