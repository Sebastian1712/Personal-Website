import React from "react";
import { IconType } from "react-icons";
import styled from "styled-components";
import Icon from "./Icon";
import "./techIconsStyle.css"

const StyledTechIcons = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1.5%;
`

export default function TechIcons(props: {icons: (IconType)[]}) {
    console.log("Inside of tech icons component");
    return (
        <>
            <StyledTechIcons>
                {
                    props.icons?.map((icon, i) => {
                        return (
                            <div className="techIconStyle">
                                <Icon icon={icon} key={i}/>
                            </div>
                        );
                    })
                }
            </StyledTechIcons>
        </>
    );
}