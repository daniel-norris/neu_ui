import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import {css} from 'styled-components';

const StyledAnchor = styled.a`
  position: relative;
  display: block;
  padding: .75rem 1.45rem;
  margin: 0.75rem 1.2rem;
  box-shadow:  ${({ active, disabled }) => {
    if (active) {
      return "inset -5px -8px 7px 1px rgba(255,255,255,0.5), inset 4px 6px 6px 0px rgba(0,0,0,0.2)";
    }
    else if (disabled) return "none";
    else return "5px 5px 8px 0 rgba(255,255,255,0.1), -5px -5px 9px 0 rgba(0,0,0,0.3)";
  }
  };
  color: ${({active}) => active ? "#666":"#999"};
  border-radius: 30px;
  ${({ disabled}) => !disabled && css`
  &:hover{
    cursor: pointer;
    color: #666;
  };`
  }
  text-decoration: none;
`;

const StyledButton = styled.a`
position: relative;
display: block;
padding: .75rem 1.25rem;
margin: 0.75rem 1.2rem;
border-radius: 10px;
box-shadow:  ${({ active, disabled }) => {
    if (active) {
      return "inset -5px -8px 7px 1px rgba(255,255,255,0.5), inset 4px 6px 6px 0px rgba(0,0,0,0.2)";
    }
    else if (disabled) return "none";
    else return "12px 12px 12px 0 rgba(255,255,255,0.25), -5px -5px 12px 0 rgba(0,0,0,0.3)";
  }
  };
color: #999;
text-decoration: none;
`;

export const NavLink = ({ children, type, active, disabled, href, horizontal }) => {
  switch (type) {
    case 'button':
      return <StyledButton href={href} active={active} disabled={disabled}>{children}</StyledButton>
    default:
      return <StyledAnchor href={href} active={active} disabled={disabled}>{children}</StyledAnchor>
  }
}

NavLink.propTypes = {
  children: PropTypes.any,
  /**
   * To highlight any Nav 
   */
  active: PropTypes.bool,
  /**
   * To disable any Nav link
   */
  disabled: PropTypes.bool,
  /**
   * Enter url for links
   */
  href: PropTypes.string,
  /**
   * Whether or not parent wants its child to be aligned horizontally
   */
  horizontal: PropTypes.bool,
}
