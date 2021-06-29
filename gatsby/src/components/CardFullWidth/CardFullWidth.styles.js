import styled from 'styled-components';
import { Sling } from 'hamburger-react';

export const CardFullwidthStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--colorWhite);

    ${({ theme }) => theme.media.smAbove} {
        flex-direction: row;
    }

    .background {
        box-shadow: ${({ theme }) => theme.elevation.dp8};

        ${({ theme }) => theme.media.smAbove} {
            width: 66%;
        }
    }

    .txtWrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-shadow: ${({ theme }) => theme.elevation.dp1};

        ${({ theme }) => theme.media.smAbove} {
            width: 34%;
        }
    }

    .titleBar {
        display: flex;
        line-height: 1.2;
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
