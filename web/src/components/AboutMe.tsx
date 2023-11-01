"use client"
import { useState } from 'react';
import Image from "next/image";

import { hardSkills, Learning } from '@/utils/mockInfo';

export function AboutMe() {
    const [hardSkillsInfo, setHardSkills] = useState(hardSkills);
    const [learning, setLearning] = useState(Learning);

    return(
        <main className="max-w-7xl m-auto px-8 py-20">
            <h2 className="text-4xl font-alt mb-8" id="aboutme">Sobre Mim</h2>
            <p className="text-xl font-normal">
                Entusiasta, curioso, animado com a área de tecnologia. Desde quando ganhei meu primeiro computador, já despertou meu interesse em trabalhar com tecnologia. Entender como sites, aplicativos, jogos, etc. Funcionavam, me despertou a vontade de seguir uma carreira nessa área.
                Meu primeiro contato com a programação foi na faculdade (Ciência da computação - UFG) e desde então, não parei de estudar sobre. Vi que a <a href="https://www.betrybe.com/" target="_blank" className="text-[#1EB720] font-bold">Trybe</a> (escola de programação voltada ao Desenvolvimento Web Full-Stack) oferecia um curso de 1500 horas e imediatamente encontrei a melhor oportunidade da minha vida para começar a minha carreira como Desenvolvedor. <br />
                Venho estudando tecnologias como <strong>JavaScript, ReactJS, HTML5, CSS, TypeScript, Java, Python</strong>, etc. E desenvolvendo projetos para colocar meus conhecimentos em prática.
                Sou uma pessoa extrovertida, engraçada e sempre me dei muito bem em qualquer ambiente de estudo/trabalho.
            </p>
            <section>
                {/* posso componentizar essas duas divs aqui embaixo depois pois está repetindo */}
                <div className="mt-12 text-3xl font-alt">
                    <h3 className='mb-8  text-center'>Hard Skills</h3>
                    <div className='grid gap-4 grid-cols-3 md:grid-cols-5'>
                    {
                        hardSkillsInfo.map((skill, index) => (
                            <div key={index} className='flex flex-col items-center'>
                                <Image src={skill.imagePath} alt={skill.name} width={96} height={96} />
                                <h5 className='mt-4'>{skill.name}</h5>
                            </div>
                        ))
                    }
                    </div>
                </div>
                <hr className='mt-12'/>
                <div className="mt-12 text-3xl font-alt">
                    <h3 className='mb-8  text-center'>Aprendendo</h3>
                    <div className='grid gap-4 grid-cols-3 md:grid-cols-5'>
                    {
                        learning.map((skill, index) => (
                            <div key={index} className='flex flex-col items-center'>
                                <Image src={skill.imagePath} alt={skill.name} width={96} height={96} />
                                <h5 className='mt-4'>{skill.name}</h5>
                            </div>
                        ))
                    }
                    </div>
                </div>
            </section>
        </main>
    )
}