import React, { Dispatch, SetStateAction, useEffect } from 'react';
import './Title.css';
import memoji from '../../../public/sebastianIcon.png'
import styled, { css, keyframes } from 'styled-components';
import { fadeInDown } from 'react-animations';

const fadeInDownAnimation =  keyframes`${fadeInDown}`;

const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-top: 10%;
  animation: ${props => (props.defaultValue == "true") ? css`${fadeInDownAnimation} .8s` : ""};
`

const Intro = styled.h1`
  font-size: 40px;
  transition: all .5s ease;

  @media only screen and (max-width: 500px) {
    font-size: 1.8em;
  }
`

const TitleParagraph = styled.p`
    display: flex;
    font-size: 1.438em;
    line-height: 120%;
    margin-top: -1%;
    transition: all .5s ease;
    text-align: center;
    width: 52%;

    @media only screen and (max-width: 500px) {
    font-size: 1.2em;
    display: inline-block;
    width: 85%;
  }

`

const TitleLine = styled.div`
    height: 3px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    width: 50%;
    transition: all .5s ease;

    @media only screen and (max-width: 500px) {
      width: 80%;
    }
`

const CircleFrame = styled.div`
    align-content: center;
    width: 114px;
    height: 114px;
    border-radius: 50%;
    background-image: url(${memoji});
    background-size: 100px;
    background-position: center;
    transition: all .5s ease;

    @media only screen and (max-width: 500px) {
      width: 104px;
      height: 104px;
      background-size: 90px;
    }
`

function Title(props: { animate: string, setAnimation: Dispatch<SetStateAction<string>> }) {

  useEffect(() => {
   if (window.sessionStorage.getItem("firstLoad") === null) {
      console.log("Inside of first load");
      window.sessionStorage.setItem("firstLoad", "1");
    }

    else if (window.sessionStorage.getItem("firstLoad") == "1") {
      console.log("Inside of second load");
      props.setAnimation("false");
    }
  });

    return (
        <TitleDiv defaultValue={props.animate} >
          <CircleFrame className="circleFrame"/>
          <Intro>Hi, I'm Sebastián!</Intro>
          <TitleParagraph>
            I’m a knowledge seeker who loves computer science 💻,
            music 🎹, philosophy 💭, nature 🍃, and much more ⚽️! 
          </TitleParagraph>
          <TitleLine className="titleLine"/>
        </TitleDiv>
    );
  }
  
  export default Title;