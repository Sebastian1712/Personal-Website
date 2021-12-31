import { IconType } from "react-icons";
import { TechStackType } from "./TechStackType";
import { TimeFrameType } from "./TimeFrameType";

export type JobType = {
    companyName: string,
    companyIcon: IconType,
    position: string,
    date: TimeFrameType,
    techStack?: TechStackType[],
    path: string
}