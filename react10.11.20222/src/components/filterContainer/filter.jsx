import React from "react";
import "./style.css";

export const Filter = ({ optionsArr, handleOptionsChange }) => {
  return (
    <div className="filter">
      <ul className="list-group">
        {optionsArr.map((o) => {
          if (o.isActive) {
            return (
              <li className="list-group-item active">
                <button
                  className="filterBtn"
                  onClick={() => handleOptionsChange(o)}
                >
                  {o.option}
                </button>
              </li>
            );
          } else {
            return (
              <li className="list-group-item">
                <button
                  className="filterBtn"
                  onClick={() => handleOptionsChange(o)}
                >
                  {o.option}
                </button>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};
