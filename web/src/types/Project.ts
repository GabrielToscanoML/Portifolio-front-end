import { HardSkills } from "./HardSkill";

export type Project = {
    id: number;
    title: string;
    imagePath: string;
    category: 'Fundamentos' | 'Front-End' | 'Back-End';
    description: string;
    github: string;
    deploy?: string;
    hardSkills: Array<HardSkills>;
}