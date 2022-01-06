import React from "react";
import { IconType } from "react-icons";
import "./techIconsStyle.css"

export default function Icon(props: {icon: IconType}) {
    console.log("Inside of icon component");

    return (
        <>
            <div>
                <props.icon size={17}></props.icon>
            </div>
        </>
    );
}