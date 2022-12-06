import { useState } from "react";
import "./App.css";
import { AddStudent } from "./components/addStudent/addStudent.component";
import { StudentList } from "./components/studentList/studentList.component";
import { removeStudentByName } from "./services/student.services";

function App() {
  return (
    <div className="app">
      <AddStudent></AddStudent>
      <StudentList></StudentList>
      <DeleteStudent></DeleteStudent>
    </div>
  );
}

function DeleteStudent() {
  const [firstName, setFirstName] = useState("");
  const handleDelete = async () => {
    await removeStudentByName(firstName);
    alert("user deleted");
  };
  return (
    <div className="mb-3 row">
      <label for="inputPassword" className="col-sm-2 col-form-label">
        Delete By First Name
      </label>
      <div className="col-sm-10">
        <input
          type="text"
          className="form-control"
          id="inputPassword"
          onChange={(o) => setFirstName(o.target.value)}
        />
      </div>
      <button className="btn btn-danger" onClick={handleDelete}>
        Remove student
      </button>
    </div>
  );
}

export default App;
