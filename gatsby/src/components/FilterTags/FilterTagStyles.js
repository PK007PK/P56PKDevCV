import styled from 'styled-components';

export const FilterTagStyles = styled.div`
    display: flex;
    flex-wrap: wrap;
    & > *:not(:last-child) {
        margin-right: var(--spacingRegular);
    }
    & > *:hover {
        color: var(--colorActive1);
    }
`;
