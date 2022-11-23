import React, { useState } from "react";
import "./style.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

export const AddWorkItem = ({ handleAddNewWorkItem }) => {
  const [inputText, setInputText] = useState("");

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (e) => {
    if (inputText !== "") {
      handleAddNewWorkItem(inputText);
      setInputText("");
    }
  };

  return (
    <>
      <div className="input-group mb-3 searchBar">
        <input
          type="text"
          className="form-control"
          placeholder="Add New Task"
          aria-label="Add New Task"
          aria-describedby="button-addon2"
          onChange={handleChange}
          value={inputText}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={handleSubmit}
        >
          Add Task
        </button>
      </div>
    </>
  );
};
