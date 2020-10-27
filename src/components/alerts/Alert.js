import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'


const StyledAlert = styled.div`
  background-color: grey;
  color: ${(props) => props.color};
`

export const Alert = ({ color }) => {
  return (
    <div>
      <StyledAlert color={color} >
       <h1>{color}</h1>
      </StyledAlert>
    </div>
  )
}

Alert.propTypes = {
  color: PropTypes.string,
}
