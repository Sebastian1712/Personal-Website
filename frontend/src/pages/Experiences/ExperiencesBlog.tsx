import React from "react";
import { JobType } from "./JobType";

export const ExperiencesBlog = (experience: JobType) => {
    return (
        <>
            <h1 className="selfDiv">{experience.companyName}</h1>
        </>
    );
}

export default ExperiencesBlog;