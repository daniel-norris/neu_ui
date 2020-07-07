import React from "react";
import "./select.css";

export const Select = ({ options, children }) => (
  <select className="mb-2">
    <option value="">{children}</option>
    {options.map((value, index) => (
      <option value={value} key={index}>
        {value}
      </option>
    ))}
  </select>
);
