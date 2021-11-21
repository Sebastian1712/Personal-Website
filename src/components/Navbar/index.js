import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, MainNavLink } from './NavBarElements'

const NavBar = () => {
    return (
        <>
            <Nav>
                <Bars/>
                <NavMenu className="navMenu">
                    <NavLink to="/" activestyle className="navLink">
                        Home
                    </NavLink>
                    <NavLink to="/experiences" activestyle className="navLink">
                        Experiences
                    </NavLink>
                    <NavLink to="/self" activestyle className="navLink">
                        Self
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}

export default NavBar
