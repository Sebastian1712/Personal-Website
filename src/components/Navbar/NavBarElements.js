import styled from 'styled-components'
import { NavLink as Link} from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
// rgb(12, 11, 11)
export const Nav = styled.nav`
    background: ##0C0B0B;
    height: 80px;
    display: flex;
    justify-content: center;
    z-index: 10;
`
export const NavLink = styled(Link) `
    color: #fff;
    display: flex;
    align-tems: center;
    text-decoration: none;
    padding: 0 1rem;
    padding-top: 50px;
    cursor: pointer;

    &.active {
        color: linear-gradient(45deg, #a801ff, #0006ff);
    }

    &: hover {
        color: #a801ff;
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
        transform: translate(-100%, 75%)
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

export const NavBtnLink = styled(Link) `
    border-radius: 4px;
    background: #256ce1;
    padding: 10px 22px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out
    text-decoration: none;

    &: hover {
        transition: all 0.2s ease-in-out
        background: #fff
        color: #010606;
    }
`
