import styled from 'styled-components';

export const CardFullWidthWrapperStyles = styled.div`
    & > *:not(:last-child) {
        margin-bottom: var(--spacingBig2);
    }
`;
