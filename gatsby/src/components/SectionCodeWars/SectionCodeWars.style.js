import styled from 'styled-components';

export const SectionCodeWarsStyles = styled.section`
    padding: var(--spacingBig2) 0px;
    background-color: rgb(245, 245, 245);

    .titleBar {
        line-height: 1;
        text-align: right;
        margin-bottom: var(--spacingRegular);

        ${({ theme }) => theme.media.mdAbove} {
            margin-bottom: 0;
        }
    }
    .titleBar h2 {
        margin-bottom: 0;
    }

    .titleBar span {
        color: var(--colorActive2);
    }

    .wrapper {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;

        ${({ theme }) => theme.media.mdAbove} {
            flex-direction: row;
        }
    }

    .codeLink {
        transition: var(--transitionBasic);
        &:hover {
            color: var(--colorActive2);
            font-weight: 600;
        }
    }

    .icon {
        font-size: 60px;
        transition: var(--transitionBasic);
        margin-top: var(--spacingRegular);

        ${({ theme }) => theme.media.mdAbove} {
            margin-top: 0;
        }

        &:hover {
            color: var(--colorActive2);
        }
    }
`;
