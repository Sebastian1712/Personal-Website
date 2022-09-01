import React from 'react'
import styled from 'styled-components'
import { SiGithub, SiLinkedin, SiGmail } from 'react-icons/si';
import { IconContext } from "react-icons";
import './Icons.css';

const IconsDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    align-content: center;
    margin-top: 3rem;
    @media only screen and (max-width: 500px) {
        position: absolute;
        justify-content: center;
        bottom: 0px;
        padding-bottom: 1%;
    }
`;

const IconLinks = styled.a`
    padding-right: 1.5%;
    transition: all .5s ease;
`;

function Icons() {
    return (
    <>
        <IconsDiv>
            <IconContext.Provider value={{className: "iconProvider"}}>
                <IconLinks href="https://github.com/Sebastian1712" className="iconDiv">
                    <SiGithub size="30" className="icon"></SiGithub>
                </IconLinks>
                <IconLinks href="https://www.linkedin.com/in/sebastianoctavio17/">
                    <SiLinkedin size="30" className="icon"></SiLinkedin>
                </IconLinks>
                <IconLinks href="mailto:sebaoctavio@gmail.com">
                    <SiGmail  size="30" className="icon"></SiGmail>
                </IconLinks>
            </IconContext.Provider>
        </IconsDiv>
    </>
    )
}

export default Icons;