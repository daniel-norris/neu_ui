import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledTextArea = styled.textarea`
  margin-bottom: 2rem;
  background-color: rgba(204, 218, 226, 0.349);
  box-shadow: inset -8px -8px 16px 0px rgba(255, 255, 255, 0.5),
    inset 4px 4px 6px 0px rgba(0, 0, 0, 0.2);
  padding: 0.5rem 0.5rem 0.5rem 0.6rem;
  border: none;
  outline: none;
  width: 100%;
  border-radius: 0.4rem;
  color: rgb(139, 139, 139);
  font-family: roboto, helvetica, sans-serif;
  font-weight: 300;
  font-size: 90%;
`;

export const TextArea = ({ cols, row, id, name, placeholder }) => (
  <StyledTextArea
    cols={cols}
    row={row}
    placeholder={placeholder}
    id={id}
    name={name}
  ></StyledTextArea>
);

TextArea.propTypes = {
  cols: PropTypes.number,
  row: PropTypes.number,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
};

TextArea.defaultProps = {
  cols: 3,
  row: 3,
  placeholder: null,
  id: null,
  name: null,
};
