import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// Import the different SVGs for the component
import Check from './Check.js'
import Exclamation from './Exclamation'
import ExclamationCircle from "./ExclamationCircle";
import InfoCircle from './InfoCircle'


// Define the styles for Alert and its children
const StyledAlert = styled.div`
  background: #DCE1E4;
  box-shadow: 5px 6px 15px rgba(0, 0, 0, 0.25), -3px -7px 12px rgba(255, 255, 255, 0.75);
  border-radius: 5px;
  color: ${(props) => props.color};
  display: flex;
  align-content: center;
  justify-content: flex-start;

  & h1 {
    margin-left: 50px;

  }

  & svg {
    margin-top: 0.25rem;
    margin-left: 0.5rem;
    -webkit-filter: drop-shadow( 0px 2px 2px rgba(0, 0, 0, 0.43));
    filter: drop-shadow( 0px 2px 2px rgba(0, 0, 0, .43));
    fill: #DCE1E4;
  }
`



export const Alert = (props) => {

  // Get both text & color from props
  const { text, color } = props

  // Get style from props and change it to all lowercase
  let { style } = props

  style = style.toLowerCase()

  // Return the appropriate alert 
  return (
    <StyledAlert color={color}>
      {style === "alert" ? <ExclamationCircle color={color} text={text} /> : null}
      {style === "warning" ? <Exclamation color={color} text={text} /> : null}
      {style === "info" ? <InfoCircle color={color} text={text}/> : null}
      {style === "success" ? <Check color={color} text={text} /> : null}
      <h1>{text}</h1>
    </StyledAlert>
  );
}

Alert.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string.isRequired,
  style: PropTypes.string,
}

Alert.defaultProps = {
  style: "alert",
  color: "#000000"
}