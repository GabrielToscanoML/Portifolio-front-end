import Image from "next/image";
import webImage from "../assets/web-development.png";

export function Header() {
    return(
        <div>
            <p className="text-center mb-4 font-alt">🚧 Projeto ainda em desenvolvimento!! 🚧</p>
        <main className="flex max-w-7xl m-auto px-8 py-20 mb-40" id="home">
            <section className="flex flex-col justify-evenly">
                <h1 className="text-5xl font-alt leading-16">Olá! Sou <span className="text-[#666BF6]">Toscano</span>, Desenvolvedor Web</h1>
                <p className="text-xl font-normal">Me chamo Gabriel Toscano, sou de Goiânia - GO. Desenvolvedor Full-Stack, entusiasta no mundo de desenvolvimento, apaixonado por jogos, músicas. <br /> Estou sempre em busca de novas oportunidades para aperfeiçoar minhas habilidades e trabalhar em projetos desafiadores.</p>
            </section>
            <Image src={ webImage } alt="Web Development image" width="700"/>
        </main>
        </div>
    );
}