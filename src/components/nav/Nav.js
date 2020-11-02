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
  justify-content: ${props => props.horizontal ? 'flex-start': 'center'};
  padding-left: 0;
  margin-bottom: 0;
  width: ${props => props.horizontal ? "100%": "fit-content"};
`;

export const Nav = ({ children, horizontal, variant }) => {
  const childComponent = children.map(child => React.cloneElement(child, { horizontal, variant }))
  return <StyledSection horizontal={horizontal}>{childComponent}</StyledSection>
}

Nav.propTypes = {
  /**
   * Nav will take links as components
   */
  children: PropTypes.any,
  /**
   * To display nav horizontally
   */
  horizontal: PropTypes.bool,
  
  /**
   * To make links appear as breadcrumbs or normal
   */
  variant: PropTypes.string,
}

Nav.defaultProps = {
  children: null,
  horizontal: false
}
