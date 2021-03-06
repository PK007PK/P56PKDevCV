import styled from 'styled-components';

export const SectionHeroTxtComponentStyles = styled.div`
    .title {
        color: var(--colorDark);
        font-size: var(-fontSizeBig3);
        line-height: 120%;
        max-width: 85%;

        ${({ theme }) => theme.media.smAbove} {
            max-width: 50%;
        }
    }

    .description {
        font-size: var(--fontSizeLead);
        line-height: 150%;
        margin: 30px 0 20px 0;

        ${({ theme }) => theme.media.smAbove} {
            max-width: 80%;
        }

        ${({ theme }) => theme.media.mdAbove} {
            max-width: 70%;
        }

        ${({ theme }) => theme.media.lgAbove} {
            max-width: 60%;
        }
    }

    .buttonsWrapper {
        display: flex;
        flex-wrap: wrap;
        align-items: center;

        & > * {
            margin-bottom: var(--spacingSmall);
        }

        & > *:not(:last-child) {
            margin-right: 10px;
        }
    }
`;
