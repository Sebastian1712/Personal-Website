import { JobType } from '../../types/JobType';
import { FaMicrosoft } from 'react-icons/fa/index';
import { SiIntel, SiReact, SiMicrosoftazure, SiCsharp, SiUnity, SiMicrosoftexcel, SiVisualstudiocode } from 'react-icons/si/index';
import { BsClipboardData, BsHeadsetVr } from 'react-icons/bs/index'

export const experiences: JobType[] = [
    {
        companyName: "Microsoft",
        companyIcon: FaMicrosoft,
        position: "Software Engineering Intern",
        date: {
            season: "Summer", 
            year: 2021
        },
        techStack: [
            {
                name: "React",
                icon: SiReact
            },
            {
                name: "C#",
                icon: SiCsharp
            },
            {
                name: "Azure",
                icon: SiMicrosoftazure
            }
        ],
        path: "/microsoft-swe-intern"
    },
    {
        companyName: "Microsoft",
        companyIcon: FaMicrosoft,
        position: "Explore Intern",
        date: {
            season: "Summer", 
            year: 2022
        },
        techStack: [
            {
                name: "C#",
                icon: SiCsharp
            },
            {
                name: "Unity",
                icon: SiUnity
            },
            {
                name: "Hololens2",
                icon: BsHeadsetVr
            }
        ],
        path: "/microsoft-explore-intern"
    },
    {
        companyName: "Intel",
        companyIcon: SiIntel,
        position: "Business Operations Intern",
        date: {
            season: "Summer", 
            year: 2019
        },
        techStack: [
            {
                name: "Excel",
                icon: SiMicrosoftexcel
            },
            {
                name: "PowerBi",
                icon: BsClipboardData
            },
            {
                name: "VisualBasic",
                icon: SiVisualstudiocode
            }
        ],
        path: "/intel-bizops-intern"
    }
]