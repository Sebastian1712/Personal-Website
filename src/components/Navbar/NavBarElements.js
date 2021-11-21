import styled from 'styled-components'
import { NavLink as Link} from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
// rgb(12, 11, 11)
export const Nav = styled.nav`
    background: #0C0B0B;
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    z-index: 10;
`

export const NavLink = styled(Link) `
    color: #fff;
    position: relative;
    display: inline-block;
    text-decoration: none;
    padding: 0 2rem 0;
    cursor: pointer;
    
    /* Fade in */
   &::after {
        top: 23px;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0.2em;
        background-color: #7736FF;
        opacity: 0;
        transition: opacity 300ms, transform 300ms;
    }

    &:after {
        content: '';
        opacity: 1;
        transform: scaleX(0);
        bottom: 0;
        left: 0;
        transform-origin: center;
    }

    &:hover::after,
    &:focus::after {
        transform: scaleX(.55);
    }
`

export const Bars = styled(FaBars) `
    display: none;
    color: linear-gradient(45deg, #a801ff, #0006ff);
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        cursor: pointer;
    }
`

export const NavMenu = styled.div `
    display: flex;
    align-items: center;
    margin-right: -24px;
    @media screen and (max-width: 758px) {
        display: none;
    }
`
export const NavBtn = styled.nav `
    display: flex;
    align-items: center;
    margin-right: 24px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const MainNavLink = styled(Link) `
    color: #fff;
    position: absolute;
    align-self: center;
    margin-left: 1300px;
    text-decoration: none;
    padding: 0 1rem;
    padding-top: 50px;
    cursor: pointer;
`