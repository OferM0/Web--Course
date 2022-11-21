import React from "react";
import "./style.css";

export const FilterComponent = ({ handleChange }) => {
  return (
    <div classNameName="input-group input-group-sm mb-3 filterContainer">
      <input
        type="text"
        className="form-control filter"
        aria-label="Small"
        aria-describedby="inputGroup-sizing-sm"
        onChange={handleChange}
      />
    </div>
  );
};
