import { TechStackType } from "./TechStackType";
import { TimeFrameType } from "./TimeFrameType";

export type JobType = {
    companyName: string,
    companyIcon?: string,
    position: string,
    date: TimeFrameType,
    techStack?: TechStackType[],
    path: string
}