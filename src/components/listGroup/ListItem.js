import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const StyledDiv = styled.div`
  position: relative;
  display: block;
  padding: .75rem 1.25rem;
  border-bottom: .0625rem solid #d1d9e6;
  background-color: ${props => props.active ? '#999' : '#edf2f5'};
  color: ${props => props.disabled ? "#c3c3c3" : props.active ? 'white' : '#999'};
  &: last-child{
    border-radius: 0 0 0.65rem 0.65rem; 
  }
  &: first-child {
    border-radius: 0.65rem 0.65rem 0 0; 
  }
`;

const StyledAnchor = styled.a`
  position: relative;
  display: block;
  padding: .75rem 1.25rem;
  text-decoration: none;
  border-bottom: .0625rem solid #d1d9e6;
  cursor: pointer;
  color: #999;
  &: active {
    box-shadow: inset -5px -8px 7px 1px rgba(255,255,255,0.5), inset 4px 6px 6px 0px rgba(0,0,0,0.2);
  }
`;

const StyledButton = styled.button`
  position: relative;
  display: block;
  padding: .75rem 1.25rem;
  border: 0;
  border-bottom: .0625rem solid #d1d9e6;
  text-align: inherit;
  background: #edf2f5;
  cursor: pointer;
  font-size: 16px;
  color: #999;
  &: last-child{
    border-radius: 0 0 0.65rem 0.65rem; 
  }
  &: first-child {
    border-radius: 0.65rem 0.65rem 0 0; 
  }
  &:hover {
    color: rgba(139, 139, 139, 0.788);
  };
  &: active {
    box-shadow: inset -5px -8px 7px 1px rgba(255,255,255,0.5), inset 4px 6px 6px 0px rgba(0,0,0,0.2);
  };
`;

export const ListItem = ({ children, active, disabled, type, href }) => {
  switch (type) {
    case 'link':
      return <StyledAnchor href={href}>{children}</StyledAnchor>
    case 'button':
      return <StyledButton>{children}</StyledButton>
    default:
      return <StyledDiv active={active} disabled={disabled} type={type}>{children}</StyledDiv>
  }
}

ListItem.propTypes = {
  children: PropTypes.any,
  /**
   * To highlight any list item 
   */
  active: PropTypes.bool,
  /**
   * To disable any list item 
   */
  disabled: PropTypes.bool,
  /**
   * Enter url if list item is acting as links 
   */
  href: PropTypes.string,
}