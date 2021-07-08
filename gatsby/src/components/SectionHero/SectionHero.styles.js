import styled from 'styled-components';

export const SectionHeroStyles = styled.section`
    position: relative;
    height: 100vh;

    ${({ theme }) => theme.media.smAbove} {
        height: 100vh;
        max-height: 800px;
    }

    ${({ theme }) => theme.media.mdAbove} {
        height: ${({ max }) => (max ? '100vh' : '80vh')};
        max-height: 770px;
    }

    ${({ theme }) => theme.media.xlAbove} {
        max-height: 700px;
    }

    .backImg {
        top: 0;
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .imgWrapper {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        /* background: linear-gradient(90deg, #ffffff 29.31%, rgba(255, 255, 255, 0) 100%); */
        /* background: linear-gradient(359.8deg, #ffffff 0.21%, rgba(255, 255, 255, 0) 18.48%),
            linear-gradient(90deg, #ffffff 29.31%, rgba(255, 255, 255, 0) 100%); */
        background: linear-gradient(5deg, #ffffff 15%, rgba(255, 255, 255, 0) 55.2%),
            linear-gradient(90deg, #ffffff 29.31%, rgba(255, 255, 255, 0) 100%);
        ${({ theme }) => theme.media.xlAbove} {
            background: linear-gradient(2deg, #ffffff 15%, rgba(255, 255, 255, 0) 55.2%),
                linear-gradient(90deg, #ffffff 29.31%, rgba(255, 255, 255, 0) 100%);
        }
    }

    .txtWrapper {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
    }

    .categoriesFilter {
        margin-bottom: var(--spacingRegular);
    }

    .tagsFilter {
        ${({ theme }) => theme.media.smAbove} {
            max-width: 90%;
        }

        ${({ theme }) => theme.media.mdAbove} {
            max-width: 85%;
        }

        ${({ theme }) => theme.media.lgAbove} {
            max-width: 75%;
        }
    }

    .blogPagination {
    }
`;
