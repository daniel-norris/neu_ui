import React from "react";
import "./check.css";
import "./radio.css";

const Check = ({ disabled, type, id, label, name }) => (
  <>
    <p className="mb-2">
      <input
        type={type === "switch" ? "checkbox" : type}
        id={id}
        name={name ? name : null}
        className={type === "switch" ? "switch" : "checkbox"}
        disabled={disabled ? disabled : null}
      />
      <label htmlFor={id}>{label}</label>
    </p>
  </>
);

export default Check;
