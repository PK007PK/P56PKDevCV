import styled from 'styled-components';

export const MenuDropDownStyles = styled.div`
    position: fixed;
    display: none;
    z-index: 5;
    top: -100vh;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: var(--colorWhite);
    height: 100vh;
    text-align: center;

    .container {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    nav {
        width: 100%;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .topBar {
        display: flex;
        justify-content: space-around;
    }
    .bottomBar {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;

        & > *:not(:last-child) {
            margin-right: 20px;
        }
    }

    ul {
        padding: 0;
        padding-left: 0;
        margin-left: 0;
        min-width: 150px;
        flex-grow: 1;
        font-size: 14px;

        ${({ theme }) => theme.media.smAbove} {
            margin-bottom: var(--spacingRegular);
            font-size: 16px;
        }
    }

    li {
        display: block;
        margin-bottom: 10px;

        ${({ theme }) => theme.media.smAbove} {
            margin-bottom: var(--spacingRegular);
        }
    }

    .title {
        font-size: 18px;

        ${({ theme }) => theme.media.smAbove} {
            font-size: var(--fontSizeBig1);
        }
    }

    @keyframes emerge {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .title,
    a {
        opacity: 0;
        animation-name: emerge;
        animation-duration: 1s;
        animation-fill-mode: forwards;
    }

    .colorWrapper1 {
        background-color: var(--colorActive2);
        height: 30vh;
    }
    .colorWrapper2 {
        background-color: black;
        height: 30vh;
    }
`;
