import React, { Component } from "react";
import "./form.css";

export const Input = ({ placeholder, type, id, name }) => (
  <input
    className="mb-2 form__input inset flat"
    placeholder={placeholder}
    type={type}
    id={id}
    name={name}
  ></input>
);
