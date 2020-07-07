import React from "react";

export const Switch = ({ disabled, type, id, label, name }) => (
  <p className="mt-2">
    <input
      type={type}
      className="switch"
      name={name}
      id={id}
      disable={disabled ? disabled : null}
    />
    <label htmlFor={id}>{label}</label>
  </p>
);
