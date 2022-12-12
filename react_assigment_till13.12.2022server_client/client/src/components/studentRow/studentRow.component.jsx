import React from "react";
import "./style.css";

export const StudentRow = ({ student, handleDelete }) => {
  return (
    <>
      <tr>
        <td>{student.firstName}</td>
        <td>{student.lastName}</td>
        <td>{student.age}</td>
        <td>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              handleDelete(student.id);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};
