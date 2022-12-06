import React, { useEffect, useState } from "react";
import { getStudents } from "../../services/student.services";

export function StudentList(props) {
  const [studentsArr, setStudentsArr] = useState([]);

  const initComponent = async () => {
    let students = await getStudents();
    setStudentsArr(students);
  };

  useEffect(() => {
    initComponent();
  }, []);

  return (
    <div>
      {studentsArr.length > 0 ? (
        studentsArr.map((s) => {
          let { firstName, lastName, age } = s;
          return (
            <StudentInfo
              firstName={firstName}
              lastName={lastName}
              age={age}
            ></StudentInfo>
          );
        })
      ) : (
        <h1>loading</h1>
      )}
    </div>
  );
}

function StudentInfo({ firstName, lastName, age }) {
  return (
    <div>
      <div>{firstName}</div>
      <div>{lastName}</div>
      <div>{age}</div>
    </div>
  );
}
