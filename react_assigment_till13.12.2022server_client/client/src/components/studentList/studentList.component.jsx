import { StudentRow } from "../studentRow/studentRow.component";
import "./style.css";
import React, { useState, useEffect } from "react";
import { compare } from "../../helpers/helper";
import { getStudents } from "../../services/student.services";
import { removeStudentById } from "../../services/student.services";

export const StudentList = (props) => {
  const [studentArr, setStudentsArr] = useState([]);

  const initComponent = async () => {
    let students = await getStudents();
    setStudentsArr(students.sort((a, b) => compare(a, b)));
  };

  useEffect(() => {
    initComponent();
  }, []);

  const handleIsDelete = async (id) => {
    let newData = studentArr.filter((m) => m.id !== id);
    newData = newData.sort((a, b) => compare(a, b));
    setStudentsArr(newData);
    await removeStudentById(id);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Age</th>
          <th scope="col">Operation</th>
        </tr>
      </thead>
      <tbody>
        {studentArr &&
          studentArr.map((s) => {
            return (
              <StudentRow
                student={s}
                handleDelete={handleIsDelete}
              ></StudentRow>
            );
          })}
      </tbody>
    </table>
  );
};
