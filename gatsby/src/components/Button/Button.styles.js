import styled from 'styled-components';

export const ButtonStyles = styled.button`
    color: white;
    border: none;
    display: inline-block;
    background-color: var(--colorGray);
    background-color: ${({ dark }) => dark && 'var(--colorDark)'};
    background-color: ${({ active1 }) => active1 && 'var(--colorActive1)'};
    background-color: ${({ active2 }) => active2 && 'var(--colorActive2)'};
    padding: 5px 20px;
    cursor: pointer;
    height: 35px;
    min-width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        text-decoration: none;
    }
`;
