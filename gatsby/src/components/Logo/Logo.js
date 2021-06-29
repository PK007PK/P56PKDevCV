import React from 'react';
import styled from 'styled-components';
import { FaCheckDouble as LogoIcon } from '@react-icons/all-files/fa/FaCheckDouble';

const LogoStyles = styled.div`
    display: flex;
    flex-shrink: 0;

    .icon {
        font-size: 28px;
        color: var(--colorDark);
        margin-right: 10px;
    }

    .textWrapper {
    }

    .name {
        font-family: 'Raleway', sans-serif;
        font-weight: 600;
        font-size: 25px;
        letter-spacing: -0.6px;
        line-height: 1;
        margin-bottom: 5px;
    }

    .sign {
        font-family: 'Raleway', sans-serif;
        font-size: 10px;
        line-height: 1;
        letter-spacing: 0.6px;
    }
`;

const Logo = ({ className, styles }) => (
    <LogoStyles className={className} styles={styles}>
        <LogoIcon className="icon" />
        <div className="textWrapper">
            <div className="name">Piotr Krasny</div>
            <div className="sign">React Frontend Developer</div>
        </div>
    </LogoStyles>
);

export default Logo;
