import React, { useState } from "react";
import "./style.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { AddWorkItem } from "../addWorkItem/addWorkItem.component";
import { WorkItem } from "../workItem/workItem.component";

export const ToDoList = (props) => {
  const [workItemsArr, setWorkItemsArr] = useState([]);
  const handleAddNewWorkItem = (inputText) => {
    let nc = {
      id: workItemsArr.length + 1,
      text: inputText,
    };
    setWorkItemsArr((prev) => [...prev, nc]);
  };

  const handleDone = (id) => {
    let current = workItemsArr.find((c) => c.id === id);
    let filterArr = workItemsArr.filter((c) => c.id !== id);
    setWorkItemsArr(filterArr);
  };

  return (
    <div>
      <h1>Today work items that should be done</h1>
      <AddWorkItem
        handleAddNewWorkItem={handleAddNewWorkItem}
        //handleChange={handleChange}
      ></AddWorkItem>
      <div>
        {workItemsArr &&
          workItemsArr.map((c) => {
            return (
              <WorkItem
                workItemText={c.text}
                workItemId={c.id}
                handleDone={handleDone}
              ></WorkItem>
            );
          })}
      </div>
    </div>
  );
};
