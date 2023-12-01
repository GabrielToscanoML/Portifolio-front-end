import { Project } from "@/types/Project";

import { hardSkills } from "./hardSkillsMock";

// JS, HTML, CSS
const fundamentalsHardSkills = [hardSkills[1], hardSkills[5], hardSkills[6]];

// São 6 projetos ao total
export const fundamentalsProjects: Array<Project> = [
    {
        id: 0,
        title: 'Pixels Art',
        description: 'Crie uma arte com cores geradas de forma aleatória em um quadro pixelado!',
        github: 'https://github.com/GabrielToscanoML/PixelsArt',
        category: 'Fundamentos',
        imagePath: 'https://user-images.githubusercontent.com/68169956/280094289-2162f159-17f7-40f1-9f4c-fb7360f31f92.png',
        hardSkills: fundamentalsHardSkills,
        deploy: 'https://gabrieltoscanoml.github.io/PixelsArt/',
    },
    {
        id: 1,
        title: 'TrybeWarts',
        description: 'Queremos saber mais sobre você! Preencha o formulário com algumas informações básicas',
        github: 'https://github.com/GabrielToscanoML/TrybeWarts',
        category: 'Fundamentos',
        imagePath: 'https://user-images.githubusercontent.com/68169956/280262354-a6f300c8-03f2-4e79-a107-71d37f7c8f5a.png',
        hardSkills: fundamentalsHardSkills,
        deploy: 'https://gabrieltoscanoml.github.io/TrybeWarts/',
    },
    {
        id: 2,
        title: 'To Do List',
        description: 'Precisando anotar as tarefas a serem feitas de uma forma organizada? Seus problemas acabaram!!',
        github: 'https://github.com/GabrielToscanoML/ToDoList',
        category: 'Fundamentos',
        imagePath: 'https://user-images.githubusercontent.com/68169956/287245911-f0e8218a-d8d9-4868-a874-405f087a1ac8.png',
        hardSkills: fundamentalsHardSkills,
        deploy: 'https://gabrieltoscanoml.github.io/ToDoList/',
    },
    {
        id: 3,
        title: 'Carta Misteriosa',
        description: 'Escreva uma mensagem de forma anônima à moda antiga com pedaços de uma revista!',
        github: 'https://github.com/GabrielToscanoML/CartaMisteriosa',
        category: 'Fundamentos',
        imagePath: 'https://user-images.githubusercontent.com/68169956/280265607-2c6975e4-4d82-4fbf-8238-9035901b3b1a.png',
        hardSkills: fundamentalsHardSkills,
        deploy: 'https://gabrieltoscanoml.github.io/CartaMisteriosa/',
    },
    {
        id: 4,
        title: 'Color Guess',
        description: 'Então você entende de cores RGB? Demonstre seu conhecimento tentando a pontuação máxima!',
        github: 'https://github.com/GabrielToscanoML/ColorGuess',
        category: 'Fundamentos',
        imagePath: 'https://user-images.githubusercontent.com/68169956/280266290-ebbe84f3-60e7-4457-8ce0-cc24e9bc8479.png',
        hardSkills: fundamentalsHardSkills,
        deploy: 'https://gabrieltoscanoml.github.io/ColorGuess/',
    },
    {
        id: 5,
        title: 'Pokedex',
        description: 'Procurando Pokemons? Aqui você encontra todos!',
        github: 'https://github.com/GabrielToscanoML/Pokedex-Simples',
        category: 'Fundamentos',
        imagePath: 'https://user-images.githubusercontent.com/68169956/280267371-dde3e10d-75fc-45c1-ae93-e1224c9058ca.png',
        hardSkills: fundamentalsHardSkills,
        deploy: 'https://gabrieltoscanoml.github.io/Pokedex-Simples/',
    },
];


// export const frontEndProjects: Array<Project> = [
//     {

//     },
// ];


// export const backEndProjects: Array<Project> = [
//     {

//     },
// ];