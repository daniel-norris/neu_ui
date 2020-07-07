import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledSelect = styled.select`
  display: block;
  font-size: 16px;
  font-family: roboto, helvetica, sans-serif;
  color: rgb(139, 139, 139);
  line-height: 1.3;
  padding: 0.3em 1.4em 0.3em 0.8em;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  margin: 0;
  border: none;

  box-shadow: 6px 6px 10px 0 rgba(0, 0, 0, 0.2),
    -8px -8px 16px 0 rgba(255, 255, 255, 0.5);

  border-radius: 0.5em;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;

  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E"),
    linear-gradient(
      to bottom,
      rgba(204, 218, 226, 0.349) 0%,
      rgba(204, 218, 226, 0.349) 100%
    );
  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 0.65em auto, 100%;

  ::-ms-expand {
    display: none;
  }

  :focus {
    box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7),
      6px 6px 10px 0 rgba(0, 0, 0, 0.2),
      -8px -8px 16px 0 rgba(255, 255, 255, 0.5);
    color: rgb(139, 139, 139);
    outline: none;
  }
  option {
    font-weight: 300;
  }
`;

export const Select = ({ options, children }) => (
  <StyledSelect className="mb-2">
    <option value="">{children}</option>
    {options.map((value, index) => (
      <option value={value} key={index}>
        {value}
      </option>
    ))}
  </StyledSelect>
);

Select.propTypes = {
  children: PropTypes.string,
  value: PropTypes.string,
  options: PropTypes.array.isRequired,
};

Select.defaultProps = {
  children: null,
  value: null,
};
