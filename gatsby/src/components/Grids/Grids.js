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

export const CVPageGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--spacingBig1);
    grid-template-rows: auto;
    margin-bottom: var(--spacingBig1);
    align-items: start;
    ${({ theme }) => theme.media.mdAbove} {
        grid-template-columns: 1fr 1fr;
    }

    ${({ theme }) => theme.media.lgAbove} {
        grid-template-columns: 2fr 1fr;
        gap: var(--spacingBig2);
    }

    .skills {
        margin: 15px 0;

        .title {
            margin-bottom: var(--spacingRegular);
        }
    }
`;
