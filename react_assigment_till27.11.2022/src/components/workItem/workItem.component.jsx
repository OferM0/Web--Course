import React from "react";
import "./style.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

export const WorkItem = ({ workItemText, workItemId, handleDone }) => {
  const done = () => {
    handleDone(workItemId);
  };
  return (
    <>
      <div className="card text-center">
        <div className="card-header">Task</div>
        <div className="card-body">
          <h5 className="card-title">{workItemText}</h5>
          <a href="#" className="btn btn-primary" onClick={done}>
            Done
          </a>
        </div>
      </div>
    </>
  );
};
