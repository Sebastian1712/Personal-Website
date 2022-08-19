import React from "react";
import { IconType } from "react-icons";
import { SiCsharp, SiMicrosoftazure, SiReact } from "react-icons/si";
import styled from "styled-components";
import TechIcons from "./TechIcons";

const StyledTechFrame = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 150px;
    height: 20px;
    border-radius: 35px;
    padding: 2.5%;
    margin-top: 10%;
`;

const StyledText = styled.p`
    font-size: 0.80rem;
    font-style: normal;
    font-weight: 600;
    opacity: .8;
`

export default function TechStackBox(props: {icons: (IconType)[]}) {
    return (
        <>
            <StyledTechFrame className="techFrame">
                <StyledText>
                    Tech Stack:
                </StyledText>
                <TechIcons icons={props.icons}></TechIcons>
            </StyledTechFrame>
        </>
    );
}