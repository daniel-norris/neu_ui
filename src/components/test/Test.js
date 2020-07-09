import React from "react";
import PropTypes from "prop-types";
// styled components is a tool that enables you to write your css in js, check docs
import styled from "styled-components";

// using the styled object
const StyledHeader = styled.h1`
    color: blue,
    font-size: ${(props) => (props.size === 'large' ? '15rem' : '3rem')},
    padding: 3rem
`;

// user imports 'header' the function, which is why we're exporting 'header' and not styledheader
export const Header = ({ size, children }) => {
    return <StyledHeader size={size}>{children}</StyledHeader>;
};

Header.propTypes = {
    /**
     * Pass children to label the button.
     */
    children: PropTypes.string,
};

Header.defaultProps = {
    children: null,
    size: "small",
};
