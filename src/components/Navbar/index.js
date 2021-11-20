import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, MainNavLink } from './NavBarElements'

const NavBar = () => {
    return (
        <>
            <Nav>
                <Bars/>
                <NavMenu>
                    <NavLink to="/" activestyle>
                        Home
                    </NavLink>
                    <NavLink to="/experiences" activestyle>
                        Experiences
                    </NavLink>
                    <NavLink to="/self" activestyle>
                        Self
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}

export default NavBar
