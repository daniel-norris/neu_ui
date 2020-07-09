import React from "react";
import PropTypes from "prop-types";
// styled components is a tool that enables you to write your css in js, check docs
import styled from "styled-components";

// using the styled object
const StyledButton = styled.button`

`;

export const Button = ({ size, children }) => {
    return <StyledButton size={size}>{children}</StyledButton>;
};

Button.propTypes = {
    /**
     * Pass children to label the button.
     */
    children: PropTypes.string,
};

Button.defaultProps = {
    children: null,
    size: "small",
};
