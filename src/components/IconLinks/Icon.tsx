import React from 'react'
import githubIcon from '../../public/GitHub-Mark-Light-120px-plus.png'
import linkedInIcon from '../../public/linkedInIcon.png'
import mailIcon from '../../public/whiteMailIcon.png'
import styled from 'styled-components'

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

const IconSvg = styled.svg`
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
            <IconLinks href="https://github.com/Sebastian1712">
                <IconImage src={githubIcon}/>
            </IconLinks>
            <IconLinks href="https://www.linkedin.com/in/sebastianoctavio17/">
                <IconImage src={linkedInIcon}/>
            </IconLinks>
            <IconLinks href="mailto:sebaoctavio@gmail.com">
                <IconImage src={mailIcon}/>
            </IconLinks>
        </IconsDiv>
    </>
    )
}

export default Icons;
