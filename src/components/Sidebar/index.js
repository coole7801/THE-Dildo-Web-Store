import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenue, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenue>
            <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
            <SidebarLink to='discover' onClick={toggle}>Discover</SidebarLink>
            <SidebarLink to='services' onClick={toggle}>Services</SidebarLink>
            <SidebarLink to='signup' onClick={toggle}>Sign Up</SidebarLink>
            </SidebarMenue>
          <SideBtnWrap>
            <SidebarRoute to='/signin' onClick={toggle}>Sign In</SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
