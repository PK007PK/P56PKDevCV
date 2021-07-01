import styled from 'styled-components';

export const FilterCategoryStyles = styled.div`
    & > *:not(:last-child) {
        margin-right: var(--spacingRegular);
    }

    & > *:hover {
        color: var(--colorActive1);
    }
`;
