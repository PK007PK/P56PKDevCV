import React, { useContext } from 'react';
import { Link } from 'gatsby';
import AppContext from 'src/AppProvider';
import { Sling as Hamburger } from 'hamburger-react';
import MenuDropDown from 'src/components/MenuDropDown/MenuDropDown';
import Logo from 'src/components/Logo/Logo';
import { NavbarStyles } from './Navbar.styles';

export default function Navbar() {
    const { toogleIsMenuActive, isMenuActive, diseableMenu } = useContext(AppContext);
    return (
        <NavbarStyles>
            <Link to="/" className="logo" onClick={diseableMenu}>
                <Logo />
            </Link>
            <div className="burger">
                <Hamburger toggled={isMenuActive} toggle={toogleIsMenuActive} />
            </div>

            {isMenuActive && <MenuDropDown />}
        </NavbarStyles>
    );
}
