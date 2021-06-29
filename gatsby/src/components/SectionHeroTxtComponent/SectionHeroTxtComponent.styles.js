import styled from 'styled-components';

export const SectionHeroTxtComponentStyles = styled.div`
    .title {
        color: var(--colorDark);
        font-size: var(-fontSizeBig3);
        max-width: 50%;
        line-height: 120%;
    }

    .description {
        font-size: var(--fontSizeLead);
        max-width: 50%;
        line-height: 150%;
        margin: 30px 0 20px 0;
    }

    .buttonsWrapper {
        display: flex;
        align-items: center;

        & > *:not(:last-child) {
            margin-right: 10px;
        }
    }
`;
