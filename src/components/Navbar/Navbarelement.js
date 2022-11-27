import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    background: #000;
    height: 80px;
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    background-color: black;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
    color: white;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 5px;
    font-weight: bold;
    text-decoration: none;
`;

export const MobileIcon = styled.div`
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
`;

export const NavMenue = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -600px;

        displsay: none;
`;

export const NavItem = styled.li`
    height: 20px;
`;

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%
    cursor: pointer;

    &.active {
        border-bottom: 3px solid white;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: -730px;
    height: 93%;
`;

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: white;
    white-space: nowrap;
    padding: 10px 22px;
    color: black;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
 
    &:hover {
        transition: all 0.2s ease-in-out;
        background: white;
        color: red;
    }
`;