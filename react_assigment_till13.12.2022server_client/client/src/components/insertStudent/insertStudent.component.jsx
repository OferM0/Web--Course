import React, { useState } from "react";
import { addStudent } from "../../services/student.services";
import "./style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const showToastMessage = () => {
  toast.success("🦄 New student added!", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

const showWarningMessage = () => {
  toast.error("🦄 Please check all fields not empty!", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

export const InsertStudent = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");

  const handleAddData = async () => {
    let json = { firstName: firstName, lastName: lastName, age: age };
    await addStudent(json);
    setFirstName("");
    setLastName("");
    setAge("");
  };

  return (
    <div className="container2">
      <div className="mb-3 row">
        <div className="col-sm-10 inp">
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            onChange={(o) => setFirstName(o.target.value)}
            value={firstName}
          />
        </div>
      </div>
      <div className="mb-3 row">
        <div className="col-sm-10 inp">
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            onChange={(o) => setLastName(o.target.value)}
            value={lastName}
          />
        </div>
      </div>
      <div className="mb-3 row">
        <div className="col-sm-10 inp">
          <input
            type="number"
            className="form-control"
            placeholder="Age"
            onChange={(o) => setAge(o.target.value)}
            value={age}
          />
        </div>
      </div>
      <button
        className="btn btn-primary"
        onClick={() => {
          if (firstName == "" || lastName == "" || age == "") {
            showWarningMessage();
          } else {
            handleAddData();
            showToastMessage();
          }
        }}
      >
        Add New Student
      </button>
      <ToastContainer />
    </div>
  );
};
