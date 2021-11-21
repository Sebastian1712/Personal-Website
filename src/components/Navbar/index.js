import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, MainNavLink, ThemeButton } from './NavBarElements'
import { BsSun } from "react-icons/bs";
import { BsMoonStars } from "react-icons/bs";
import styled from 'styled-components'


const Toggle = styled.button`
    position: absolute;
    cursor: pointer;
    border: none;
    background-color: transparent;
    transition: all .5s ease;
    right: 0px;
    padding-right: 1%;
`;

function NavBar(props){

    function toggleTheme() {
        if (props.theme === "light") {
            props.setTheme("dark");
        } else {
            props.setTheme("light");
        }
    };

    const icon = props.theme === "light" ? <BsMoonStars size="30" className="themeIcons"/> : <BsSun size="30" className="themeIcons"/>;

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
                    <Toggle onClick={toggleTheme}>
                        {icon}
                    </Toggle>
                </NavMenu>
            </Nav>
        </>
    )
}

export default NavBar
