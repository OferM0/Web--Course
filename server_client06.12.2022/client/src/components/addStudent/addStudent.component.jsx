import React, { useState } from "react";
import { addStudent } from "../../services/student.services";

export const AddStudent = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");

  const handleAddData = async () => {
    let json = { firstName: firstName, lastName: lastName, age: age };
    await addStudent(json);
    alert("new student added");
  };

  return (
    <div>
      <div className="mb-3 row">
        <label for="inputPassword" className="col-sm-2 col-form-label">
          First Name
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="inputPassword"
            onChange={(o) => setFirstName(o.target.value)}
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label for="inputPassword" className="col-sm-2 col-form-label">
          Last Name
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="inputPassword"
            onChange={(o) => setLastName(o.target.value)}
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label for="inputPassword" className="col-sm-2 col-form-label">
          Age
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="inputPassword"
            onChange={(o) => setAge(o.target.value)}
          />
        </div>
      </div>
      <button className="btn btn-primary" onClick={handleAddData}>
        Add New Student
      </button>
    </div>
  );
};
