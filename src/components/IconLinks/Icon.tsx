import React from 'react'
import githubIcon from '../../public/GitHub-Mark-Light-120px-plus.png'
import linkedInIcon from '../../public/linkedInIcon.png'
import mailIcon from '../../public/whiteMailIcon.png'
import styled from 'styled-components'
import { SiGithub, SiLinkedin, SiGmail } from 'react-icons/si';
import { IconContext } from "react-icons";
import './Icons.css';


const IconsDiv = styled.div`
    /* background-color: #fff; */
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 50px;
    margin-top: 14%;
`;

const IconLinks = styled.a`
    padding-right: 1.5%;
`

const IconImage = styled.img`
    width: 30px;
    height: 30px;
    padding-right: 5%;
    ${IconLinks}:hover & {
    fill: #7736FF;
  }
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

const socials = [
    {
      href: 'https://github.com/Sebastian1712',
      icon: SiGithub,
      text: 'Github',
    },
    {
      href: 'https://www.linkedin.com/in/sebastianoctavio17/',
      icon: SiLinkedin,
      text: 'Linkedin',
    }
  ];