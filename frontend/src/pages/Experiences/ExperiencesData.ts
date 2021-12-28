import { JobType } from "./JobType";
import microsoftLogo from '../../public/microsoftIcon.png';
import intelLogo from '../../public/newIntelIcon.png';

export const experiences: JobType[] = [
    {
        companyName: "Microsoft",
        companyIcon: microsoftLogo,
        position: "Software Engineering Intern",
        date: {
            season: "Summer", 
            year: 2021
        },
        techStack: [
            {
                name: "React",
                icon: "<insertIcon>"
            },
            {
                name: "C#",
                icon: "<insertIcon>"
            },
            {
                name: "Azure",
                icon: "<insertIcon>"
            }
        ],
        path: "/microsoft-swe-intern"
    },
    {
        companyName: "Microsoft",
        companyIcon: microsoftLogo,
        position: "Explore Intern",
        date: {
            season: "Summer", 
            year: 2022
        },
        techStack: [
            {
                name: "C#",
                icon: "<insertIcon>"
            },
            {
                name: "Unity",
                icon: "<insertIcon>"
            },
            {
                name: "Hololens2",
                icon: "<insertIcon>"
            }
        ],
        path: "/microsoft-explore-intern"
    },
    {
        companyName: "Intel",
        companyIcon: intelLogo,
        position: "Business Operations Intern",
        date: {
            season: "Summer", 
            year: 2019
        },
        path: "/intel-bizops-intern"
    }
]