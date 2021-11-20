import styled from 'styled-components'
import { NavLink as Link} from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

export const Nav = styled.nav`
    background: #0C0B0B;
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
    z-index: 10;
`

export const NavLink = styled(Link) `
    color: #fff;
    position: relative;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 3rem;
    padding-top: 50px;
    cursor: pointer;
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