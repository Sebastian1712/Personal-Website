import React from "react";
import { IconContext, IconType } from "react-icons";
import styled from "styled-components";
import { JobType } from "../../../types/JobType";
import './experiencesBlogStyle.css';
import TechStackBox from "./TechStackBox";

const StyledExperiencesBlogTitle = styled.div`
    width: 400px;
    height: 210px;
    @media only screen and (max-width: 500px) {
      width: 330px;
    }
`;
const StyledTitle = styled.h2`
    font-size: 1.75rem;
    font-weight: 800;
    line-height: 35px;
    padding: 0;
    margin: 0;
`;

const StyledDate = styled.p`
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 600;
    opacity: .5;
    line-height: 18px;
`;

export const ExperiencesBlog = (props: {experience: JobType}) => {
    
    var icons = props.experience.techStack?.map((icon) => icon.icon)
    console.log(icons);
    return (
        <>
            <div className="experiencesBlog">
                <StyledExperiencesBlogTitle>
                    <StyledTitle>
                        <IconContext.Provider value={{className: "iconProvider"}}>
                            <props.experience.companyIcon size={23} className="iconStyle"/>
                        </IconContext.Provider>
                        {props.experience.companyName}
                        <br></br>
                        {props.experience.position}
                    </StyledTitle>
                    <StyledDate>
                        {props.experience.date.season} {props.experience.date.year}
                    </StyledDate>
                    <TechStackBox icons={icons}/>
                </StyledExperiencesBlogTitle>
            </div>
        </>
    );
}

export default ExperiencesBlog;