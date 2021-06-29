import styled from 'styled-components';

export const ButtonStyles = styled.button`
    color: white;
    border: none;
    display: inline-block;
    cursor: pointer;
    background-color: var(--colorGray);
    background-color: ${({ dark }) => dark && 'var(--colorDark)'};
    background-color: ${({ active1 }) => active1 && 'var(--colorActive1)'};
    background-color: ${({ active2 }) => active2 && 'var(--colorActive2)'};
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 40px;
    padding: 5px 20px;
    padding: ${({ big }) => big && '10px 60px'};
    font-size: var(--fontSizeRegular);
    font-size: ${({ big }) => big && 'var(--fontSizeBig1)'};
    min-width: 100px;
    min-width: ${({ big }) => big && '300px'};
    transition: var(--transitionBasic);

    &:hover,
    &:focus {
        text-decoration: none;
        box-shadow: ${({ theme }) => theme.elevation.dp8};
        outline: none;
    }
`;
