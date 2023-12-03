import Image from "next/image";
import webImage from "../assets/web-development.png";

export function Header() {
    return(
        <div className="xl:h-screen py-24" id="home">
            <main className="flex flex-col-reverse max-w-7xl m-auto px-4 py-8 mb-4 lg:flex-row">
                <section className="flex flex-col justify-evenly max-w-screen-sm p-4 lg:max-w-lg xl:max-w-xl">
                    <h1 className="text-3xl font-alt mb-4 xl:text-5xl">Olá! Sou <span className="text-[#666BF6]">Toscano</span>, Desenvolvedor Web</h1>
                    <p className="text-lg font-normal xl:text-xl">Me chamo Gabriel Toscano, sou de Goiânia - GO. Desenvolvedor Full-Stack, entusiasta no mundo de desenvolvimento, apaixonado por jogos, músicas. <br /> Estou sempre em busca de novas oportunidades para aperfeiçoar minhas habilidades e trabalhar em projetos desafiadores.</p>
                </section>
                <section className="lg:max-w-lg xl:max-w-2xl"> <Image src={ webImage } alt="Web Development image" max-width="100%"/></section>
            </main>
        </div>
    );
}