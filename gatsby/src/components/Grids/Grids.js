import styled from 'styled-components';

export const BlogGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--spacingBig1);
    grid-template-rows: auto;
    margin-bottom: var(--spacingBig1);

    ${({ theme }) => theme.media.mdAbove} {
        grid-template-columns: 1fr 1fr;
    }

    ${({ theme }) => theme.media.lgAbove} {
        grid-template-columns: 1fr 1fr;
        gap: var(--spacingBig2);
    }
`;
