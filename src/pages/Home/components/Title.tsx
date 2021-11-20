import React from 'react';
import './Title.css';
import memoji from '../../../public/sebastianIcon.png'
import styled from 'styled-components';

const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-top: 10%;
`

const Intro = styled.h1`
  color: #fff;
  font-size: 40px;
`

const TitleParagraph = styled.p`
    display: flex;
    color: #fff;
    font-size: 1.438em;
    line-height: 120%;
    margin-top: -1%;
`

const TitleLine = styled.div`
    height: 3px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    background: #7736FF;
    width: 600px;
`

const CircleFrame = styled.div`
    align-content: center;
    width: 114px;
    height: 114px;
    background: #7736FF;
    border-radius: 50%;
    background-image: url(${memoji});
    background-size: 100px;
    background-position: center;
`

function Title() {
    return (
        <TitleDiv>
          <CircleFrame/>
          <Intro>Hi, I'm Sebastián!</Intro>
          <TitleParagraph>
            I’m a knowledge seeker who loves computer science 💻,<br></br>
            music 🎹, philosophy 💭, nature 🍃, and much more ⚽️! 
          </TitleParagraph>
          <TitleLine/>
        </TitleDiv>
    );
  }
  
  export default Title;