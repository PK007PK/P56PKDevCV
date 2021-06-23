import React from 'react';
import { ButtonStyles } from './Button.styles';

const Button = ({ children, className, ...rest }) => (
    <ButtonStyles {...rest} className={className}>
        {children}
    </ButtonStyles>
);

export default Button;
