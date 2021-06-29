import styled from 'styled-components';

export const SectionCodeWarsStyles = styled.section`
    padding: var(--spacingBig2) 0px;
    background-color: rgb(245, 245, 245);

    .titleBar {
        line-height: 1;
        text-align: right;
    }
    .titleBar h2 {
        margin-bottom: 0;
    }

    .titleBar span {
        color: var(--colorActive2);
    }

    .wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        transition: var(--transitionBasic);
    }

    .codeLink {
        &:hover {
            color: var(--colorActive2);
            font-weight: 600;
        }
    }

    .icon {
        font-size: 60px;
        transition: var(--transitionBasic);

        &:hover {
            color: var(--colorActive2);
        }
    }
`;
