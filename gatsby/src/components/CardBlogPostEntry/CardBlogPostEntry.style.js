import styled from 'styled-components';

export const CardBlogPostEntryStyles = styled.div`
    .titleWrapper,
    .linkWrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 var(--spacingRegular);
        background-color: var(--colorLikeWhite);
        border: 1px solid lightgray;
    }

    .titleWrapper {
        height: 75px;

        h3 {
            font-size: var(--fontSizeLead);
        }
    }

    .backgroundImg {
        box-shadow: ${({ theme }) => theme.elevation.dp4};
        transform: scale(1.01);
        transition: var(--transitionFast);
        &:hover {
            transform: scale(1.1);
        }
    }

    .logoWrapper {
        width: 100%;
        /* 1920 / 942 */
        aspect-ratio: 1920/942;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: ${({ theme }) => theme.elevation.dp4};
        padding: var(--spacingRegular);
        padding-top: var(--spacingBig3);
        border-bottom: 1px solid lightgray;

        overflow-y: auto;

        ${({ theme }) => theme.media.xlAbove} {
            height: 285px;
        }

        /* width */
        ::-webkit-scrollbar {
            width: 2px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
            background: var(--colorDark);
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
            background: var(--colorActive2);
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
            background: #555;
        }
    }

    .infoWrapper {
        align-items: flex-start;
    }

    .linkWrapper {
        height: 50px;
        align-items: center;

        & > * {
            width: 24%;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: var(--transitionBasic);

            &:hover {
                background-color: var(--colorActive1);
                color: var(--colorWhite);
            }
        }
    }
`;

// box-shadow: ${({ theme }) => theme.elevation.dp8};
// box-shadow: ${({ theme }) => theme.elevation.dp1};
// padding: 0 var(--spacingRegular);
// background-color: var(--colorGray);
// padding: var(--spacingRegular);
// ${({ theme }) => theme.media.xlAbove} {
//     height: 285px;
// }
// transition: var(--transitionBasic);
