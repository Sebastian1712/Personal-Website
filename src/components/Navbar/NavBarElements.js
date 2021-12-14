import styled from 'styled-components'
import { NavLink as Link} from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

// rgb(12, 11, 11)
export const Nav = styled.nav`
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    z-index: 10;
`

export const NavLink = styled(Link) `
    position: relative;
    display: inline-block;
    text-decoration: none;
    padding: 0 2rem 0;
    cursor: pointer;
    transition: all .5s ease;
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
        font-size: small
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
    position: absolute;
    align-self: center;
    margin-left: 1300px;
    text-decoration: none;
    padding: 0 1rem;
    padding-top: 50px;
    cursor: pointer;
`