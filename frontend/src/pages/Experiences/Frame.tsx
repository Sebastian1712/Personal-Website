import React from 'react';
import styled from 'styled-components';
import { FrameConfigurations } from './FrameConfigurations';
import { FrameArtifacts } from './FrameArtifacts';
import { NavLink } from 'react-router-dom';
import { JobType } from './JobType';

const StyledLinkFrame = styled(NavLink)`
    display: contents;
`;

const StyledImage = styled.img`
    width: 25px;
    height: 25px;
    padding: .3rem;
`;

const StyledText = styled.text`
    font-weight: 700;
    padding: .2rem;
`;

const StyledFrame = styled.div<FrameConfigurations & FrameArtifacts>`
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    border-width:${props => props.strokeSize}px;
    border-color: ${props => props.color};
    border-style: solid;
    border-radius: 25px;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-bottom: 3%;

    @media only screen and (max-width: 500px) {
        width: 250px;
        height: 125px;
        font-size: smaller;
        margin-bottom: 5%;
    }
`;

const Frame = (props: {configuration: FrameConfigurations, experience: JobType, parentPath: string}) => {
    return (
        <StyledLinkFrame to={`${props.parentPath}${props.experience.path}`} className="styledFrameLink">
            <StyledFrame className='styleFrame' 
            width={props.configuration.width}
            height={props.configuration.height}
            strokeSize={props.configuration.strokeSize}
            color={props.configuration.color}
            icon={props.experience.companyIcon}
            title={props.experience.companyName}
            description={props.experience.position}>
                    <StyledImage src={props.experience.companyIcon}></StyledImage>
                    <StyledText>{props.experience.companyName}</StyledText>
                    <StyledText>{props.experience.position}</StyledText>
            </StyledFrame>
        </StyledLinkFrame>
    );
}

export default Frame;