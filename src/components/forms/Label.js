import React, { Component } from "react";
import "./form.css";

const Label = ({ id, children }) => (
  <label className="mb-2 form__label" htmlFor={id}>
    {children}
  </label>
);

export default Label;
