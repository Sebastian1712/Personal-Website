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
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    padding-top: 50px;
    cursor: pointer;
    
    &:after {
        content: '';
        position: absolute;
        width: 85%;
        height: 0.175rem;
        top: 75px;
        background: linear-gradient(45deg, #a801ff, #0006ff);;
        transform: scale(0, 1);
        transition: transform 0.3s ease;
    }

    &:hover::after, &:focus::after {
        transform: scale(.7, 1);
    }
    /* &:focus {
        transform: scale(.7, 1);
    } */
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

    &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 0.175rem;
        bottom: 0;
        left: 0;
        top: 75px;
        background: linear-gradient(45deg, #a801ff, #0006ff);;
        transform: scale(0, 1);
        transition: transform 0.3s ease;
    }

    &:hover::after, &:focus::after {
        transform: scale(.7, 1);
    }
`