import styled from 'styled-components';

export const CardFullwidthStyles = styled.div`
    display: flex;
    background-color: var(--colorWhite);

    .background {
        width: 66%;
    }

    .txtWrapper {
        width: 34%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .titleBar {
        display: flex;
        justify-content: space-between;
        padding: var(--spacingMedium);
        background-color: var(--colorGray);
    }

    .contentBox {
    }

    .bottomBar {
    }
`;
