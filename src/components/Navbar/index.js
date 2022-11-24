import React from 'react'
import { Nav, NavbarContainer, NavLogo } from './Navbarelements';

const Navbar = () => {
  return (
    <>
        <Nav>
            <NavbarContainer>
              <NavLogo to="/">Dildo</NavLogo>
            </NavbarContainer>
        </Nav>
    </>
  );
};

export default Navbar;