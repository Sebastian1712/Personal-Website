import React from 'react';
import styled from 'styled-components';
import { FrameConfigurations } from './FrameConfigurations';
import { FrameArtifacts } from './FrameArtifacts';
import { NavLink } from 'react-router-dom';

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

const Frame = ({ width, height, strokeSize, color, icon, title, description }: FrameConfigurations & FrameArtifacts) => {

    return (
        <StyledLinkFrame to='/experiences/one' className="styledFrameLink">
            <StyledFrame className='styleFrame' 
            width={width}
            height={height}
            strokeSize={strokeSize}
            color={color}
            icon={icon}
            title={title}
            description={description}>
                    <StyledImage src={icon}></StyledImage>
                    <StyledText>{title}</StyledText>
                    <StyledText>{description}</StyledText>
            </StyledFrame>
        </StyledLinkFrame>
    );
}

export default Frame;