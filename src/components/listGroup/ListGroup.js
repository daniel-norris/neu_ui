import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const StyledSection = styled.section`
  background-color: rgba(204, 218, 226, 0.349);
  box-shadow: 6px 6px 10px 0 rgba(0, 0, 0, 0.2),
    -8px -8px 16px 0 rgba(255, 255, 255, 0.5);
  border-radius: 0.8rem;
  display: flex;
  flex-direction: ${props => props.horizontal ? 'row' : 'column'};
  padding-left: 0;
  margin-bottom: 0;
  max-width: 400px;
`;

export const ListGroup = ({ children, horizontal }) => {
  return <StyledSection horizontal={horizontal}>{children}</StyledSection>
}

ListGroup.propTypes = {
  /**
   * ListGroup will take list item components
   */
  children: PropTypes.any,
  /**
   * To display list horizontally
   */
  horizontal: PropTypes.bool,
}

ListGroup.defaultProps = {
  children: null,
  horizontal: false
}
