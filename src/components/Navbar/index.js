import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, MainNavLink } from './NavBarElements'

const NavBar = () => {
    return (
        <>
            <Nav>
                <Bars/>
                <NavMenu>
                    <NavLink to="/passions" activestyle>
                        .getPassions()
                    </NavLink>
                    <NavLink to="/experiences" activestyle>
                        .getExperiences()
                    </NavLink>
                    <NavLink to="/recommendations" activestyle>
                        .giveRecommendations()
                    </NavLink>
                </NavMenu>
                <MainNavLink className="home-page" to="/" activestyle>
                        Sebastian()
                </MainNavLink>
            </Nav>
        </>
    )
}

export default NavBar
