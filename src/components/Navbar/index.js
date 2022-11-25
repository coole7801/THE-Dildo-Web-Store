import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenue, NavItem, NavLinks } from './Navbarelements';

const Navbar = () => {
  return (
    <>
        <Nav>
            <NavbarContainer>
              <NavLogo to="/">Dildo</NavLogo>
              <MobileIcon>
                <FaBars />
              </MobileIcon>
              <NavMenue>
                <NavItem>
                  <NavLinks to='about'>About</NavLinks>
                </NavItem>
              </NavMenue>
            </NavbarContainer>
        </Nav>
    </>
  );
};

export default Navbar;