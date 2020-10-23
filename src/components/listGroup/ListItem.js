import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const StyledDiv = styled.div`
  position: relative;
  display: block;
  padding: .75rem 1.25rem;
  border-bottom: ${props => props.horizontal ? "none" : ".0625rem solid #d1d9e6"};
  border-right: ${props => props.horizontal ? ".0625rem solid #d1d9e6" : "none"};
  background-color: ${props => props.active ? '#999' : '#edf2f5'};
  color: ${props => props.disabled ? "#c3c3c3" : props.active ? 'white' : '#999'};
  &: last-child{
    border-radius: ${props => props.horizontal ? "0 0.65rem 0.65rem 0.65rem" : "0 0 0.65rem 0.65rem"}; 
  }
  &: first-child {
    border-radius: ${props => props.horizontal ? "0.65rem 0 0 0.65rem" : "0.65rem 0.65rem 0 0"};
  }
`;

const StyledAnchor = styled.a`
  position: relative;
  display: block;
  padding: .75rem 1.25rem;
  text-decoration: none;
  border-bottom: ${props => props.horizontal ? "none" : ".0625rem solid #d1d9e6"};
  border-right: ${props => props.horizontal ? ".0625rem solid #d1d9e6" : "none"};
  cursor: pointer;
  color: #999;
  &: active {
    box-shadow: inset -5px -8px 7px 1px rgba(255,255,255,0.5), inset 4px 6px 6px 0px rgba(0,0,0,0.2);
  }
  &: last-child{
    border-radius: ${props => props.horizontal ? "0 0.65rem 0.65rem 0.65rem" : "0 0 0.65rem 0.65rem"}; 
  }
  &: first-child {
    border-radius: ${props => props.horizontal ? "0.65rem 0 0 0.65rem" : "0.65rem 0.65rem 0 0"};
  }
`;

const StyledButton = styled.button`
  position: relative;
  display: block;
  padding: .75rem 1.25rem;
  border: none;
  border-bottom: ${props => props.horizontal ? "none" : ".0625rem solid #d1d9e6"};
  border-right: ${props => props.horizontal ? ".0625rem solid #d1d9e6" : "none"};
  text-align: inherit;
  background: #edf2f5;
  cursor: pointer;
  font-size: 16px;
  color: #999;
  &: last-child{
    border-radius: ${props => props.horizontal ? "0 0.65rem 0.65rem 0.65rem" : "0 0 0.65rem 0.65rem"}; 
  }
  &: first-child {
    border-radius: ${props => props.horizontal ? "0.65rem 0 0 0.65rem" : "0.65rem 0.65rem 0 0"};
  }
  &:hover {
    color: rgba(139, 139, 139, 0.788);
  };
  &: active {
    box-shadow: inset -5px -8px 7px 1px rgba(255,255,255,0.5), inset 4px 6px 6px 0px rgba(0,0,0,0.2);
  };
`;

export const ListItem = ({ children, active, disabled, type, href, horizontal }) => {
  switch (type) {
    case 'link':
      return <StyledAnchor href={href} horizontal={horizontal}>{children}</StyledAnchor>
    case 'button':
      return <StyledButton horizontal={horizontal}>{children}</StyledButton>
    default:
      return <StyledDiv active={active} disabled={disabled} type={type} horizontal={horizontal}>{children}</StyledDiv>
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
  /**
   * Whether or not parent wants its child to be aligned horizontally
   */
  horizontal: PropTypes.bool,
}
