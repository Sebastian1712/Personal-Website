import React from "react";
import { JobType } from "../../../types/JobType";

export const ExperiencesBlog = (props: {experience: JobType}) => {
    console.log("Entering Blog...")
    return (
        <>
            <h1 className="selfDiv">{props.experience.companyName}</h1>
        </>
    );
}

export default ExperiencesBlog;