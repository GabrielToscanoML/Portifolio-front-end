import { HardSkills } from '@/types/HardSkill';

/*
* Ícones retirados do site: https://icons8.com/icons/
*/

// icones (vou refatorar isso ainda)
import Icon1 from '../assets/hardSkillIcons/hard-skill-1.svg';
import Icon2 from '../assets/hardSkillIcons/hard-skill-2.svg';
import Icon3 from '../assets/hardSkillIcons/hard-skill-3.svg';
import Icon4 from '../assets/hardSkillIcons/hard-skill-4.svg';
import Icon5 from '../assets/hardSkillIcons/hard-skill-5.svg';
import Icon6 from '../assets/hardSkillIcons/hard-skill-6.svg';
import Icon7 from '../assets/hardSkillIcons/hard-skill-7.svg';
import Icon8 from '../assets/hardSkillIcons/hard-skill-8.svg';
import Icon9 from '../assets/hardSkillIcons/hard-skill-9.png';
import Icon10 from '../assets/hardSkillIcons/hard-skill-10.svg';
import Icon11 from '../assets/hardSkillIcons/hard-skill-11.png';
import Icon12 from '../assets/hardSkillIcons/hard-skill-12.svg';
import Icon13 from '../assets/hardSkillIcons/hard-skill-13.png';
import Icon14 from '../assets/hardSkillIcons/hard-skill-14.png';
import Icon15 from '../assets/hardSkillIcons/hard-skill-15.png';
import Icon16 from '../assets/hardSkillIcons/learning-1.png';
import Icon17 from '../assets/hardSkillIcons/learning-2.png';
import Icon18 from '../assets/hardSkillIcons/learning-3.svg';
import Icon19 from '../assets/hardSkillIcons/learning-4.svg';
import Icon20 from '../assets/hardSkillIcons/learning-5.png';

export const hardSkills: Array<HardSkills> = [
    {imagePath: Icon1, name: 'TypeScript'}, {imagePath: Icon2, name: 'JavaScript'},
    {imagePath: Icon3, name: 'React'}, {imagePath: Icon4, name: 'NextJS'},
    {imagePath: Icon5, name: 'NodeJS'}, {imagePath: Icon6, name: 'HTML5'},
    {imagePath: Icon7, name: 'CSS'}, {imagePath: Icon8, name: 'TailwindCSS'},
    {imagePath: Icon9, name: 'Jest'}, {imagePath: Icon10, name: 'Docker'},
    {imagePath: Icon11, name: 'MySQL'}, {imagePath: Icon12, name: 'Express'},
    {imagePath: Icon13, name: 'Sequelize'}, {imagePath: Icon14, name: 'Nodemon'},
    {imagePath: Icon15, name: 'C'}];

export const Learning: Array<HardSkills> = [
    {imagePath: Icon16, name: 'Angular'}, {imagePath: Icon17, name: 'Java'},
    {imagePath: Icon18, name: 'SpringBoot'}, {imagePath: Icon19, name: 'Python'},
    {imagePath: Icon20, name: 'MongoDB'}];
