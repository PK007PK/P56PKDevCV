import React from 'react';
import styled from 'styled-components';

const StyledHeading = styled.h1`
    text-transform: capitalize;
    line-height: 1.2;
`;

const Heading = ({ tag = 'h1', children }) => <StyledHeading as={tag}>{children}</StyledHeading>;

export default Heading;
