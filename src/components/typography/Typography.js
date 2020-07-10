import React from "react";
import PropTypes from "prop-types";
// styled components is a tool that enables you to write your css in js, check docs
import styled from "styled-components";

const fontSize = (input) => {
    let size = "";
    switch (input) {
        case 'h1':
            size = "6rem"
            break
        case 'h2':
            size = "5rem"
            break
        case 'h3':
            size = "4rem"
            break
        case 'h4':
            size = "3rem"
            break
        case 'h5':
            size = "2rem"
            break
        case 'h6':
            size = "1.5rem"
            break
        case 'subtitle1':
            size = "1.2rem"
            break
        case 'subtitle2':
            size = "1rem"
            break
        case 'body1':
            size = "1.2rem"
            break
        case 'body2':
            size = "1rem"
            break
        default:
            return
    }
    return size
}

const fontWeight = (input) => {
    let fontWeight = "";
    switch (input) {
        case 'subtitle2':
            fontWeight = "550"
            break
        default:
            return
    }
    return fontWeight
}

// using the styled object
const StyledTypography = styled.h1`
    color: rgb(139, 139, 139);
    font-size: ${props => fontSize(props.variant)};
    font-weight: ${props => fontWeight(props.variant)};
    margin-bottom: 0.5rem;
`;

// user imports 'Typography' the function, which is why we're exporting 'Typography' and not styledTypography
export const Typography = ({ variant, children }) => {
    return <StyledTypography variant={variant}>{children}</StyledTypography>;
};

const variants = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h2: "h2",
    h2: "h2",
    h2: "h2",
    h2: "h2",
    h2: "h2",
    h2: "h2",
    h2: "h2",
};

Typography.propTypes = {
    /**
     * Pass children to add text.
     */
    children: PropTypes.string,
    /**
     * Pass variant to choose text size.
     */
    variant: PropTypes.oneOf(Object.keys(variants)),
};

Typography.defaultProps = {
    children: null,
};