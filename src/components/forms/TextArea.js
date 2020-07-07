import React, { Component } from "react";

const TextArea = ({ cols, row, id, name, placeholder }) => (
  <textarea
    className="mb-2 form__textarea inset flat"
    cols={cols}
    row={row}
    placeholder={placeholder}
    id={id}
    name={name}
  ></textarea>
);

export default TextArea;
