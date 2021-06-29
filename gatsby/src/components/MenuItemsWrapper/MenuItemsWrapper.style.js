import styled from 'styled-components';

export const MenuItemsWrapperStyles = styled.ul`
    list-style-type: none;
    display: flex;

    li:not(:last-child) {
        margin-right: var(--spacingMedium);
    }

    li {
        font-weight: 600;
    }

    .active {
        color: var(--colorActive1);
    }
`;
