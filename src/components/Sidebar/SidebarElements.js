import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from  'react-router-dom';
import {FaTimes} from 'react-icons/fa'

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: black;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    color: black
    opacity: ${({isOpen}) => (isOpen ? '100%':'0%')};
    top: ${({isOpen}) => (isOpen ? '-100%':'0%')};
`;

export const CloseIcon = styled(FaTimes)`
    color: white;

    &:hover {
        transition: 0.2s all ease-in-out;
        color: red;
    }
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    color: white;
`;

export const SidebarMenue = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 80px);
    text-align: center;
`;

export const SidebarLink = styled(LinkS)`
    display: absolute;
    align-items: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2 ease-in-out;
    text-decoration: none;
    color: white;
    cursor: pointer;

    &:hover {
        color: red;
        transition: 0.2 ease-in-out;
    }
`;

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;

export const SidebarRoute = styled(LinkR)`
    border-radius: 50px;
    background: white;
    white-space: nowrap;
    padding: 16px 50px;
    color: #010606;
    font-size: 16px
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out
        background: black;
        color: red;
    }
`;