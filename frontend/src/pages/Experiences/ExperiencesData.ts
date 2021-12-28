import { JobType } from "./JobType";

export const experiences: JobType[] = [
    {
        companyName: "Microsoft",
        companyIcon: "<inserIcon>",
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
        path: "/experiences/microsoft-swe-intern"
    },
    {
        companyName: "Microsoft",
        companyIcon: "<inserIcon>",
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
        path: "/experiences/microsoft-explore-intern"
    },
    {
        companyName: "Intel",
        companyIcon: "<inserIcon>",
        position: "Business Operations Intern",
        date: {
            season: "Summer", 
            year: 2019
        },
        path: "/experiences/intel-bizops-intern"
    }
]