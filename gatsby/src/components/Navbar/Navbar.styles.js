import styled from 'styled-components';

export const NavbarStyles = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
    margin: var(--spacingMedium);

    .logo,
    .burger {
        z-index: 10;
    }

    .desktopLinksWrapper {
        display: none;

        ${({ theme }) => theme.media.mdAbove} {
            display: flex;
            flex-grow: 1;
            justify-content: flex-end;
            margin-right: var(--spacingBig1);
        }
    }
`;
