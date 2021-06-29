import styled from 'styled-components';
import { Sling } from 'hamburger-react';

export const CardFullwidthStyles = styled.div`
    display: flex;
    align-items: center;
    background-color: var(--colorWhite);

    .background {
        width: 66%;
        box-shadow: ${({ theme }) => theme.elevation.dp8};
    }

    .txtWrapper {
        width: 34%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-shadow: ${({ theme }) => theme.elevation.dp1};
    }

    .titleBar {
        display: flex;
        justify-content: space-between;
        background-color: var(--colorGray);
        height: 75px;
        align-items: center;
        padding: 0 var(--spacingRegular);
    }

    .contentBox {
        overflow-y: auto;
        padding: var(--spacingRegular);
        height: 220px;

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

    .bottomBar {
        padding-left: 20px;
        display: flex;
        color: var(--colorWhite);
        background-color: var(--colorDark);
        height: 65px;

        & > * {
            width: 24%;
            /* border: 1px solid red; */
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: var(--transitionBasic);

            &:hover {
                background-color: var(--colorActive2);
            }
        }
    }
`;
