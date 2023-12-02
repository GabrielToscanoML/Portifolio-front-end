import Image from "next/image";
import webImage from "../assets/web-development.png";

export function Header() {
    return(
        <div>
            <p className="text-center mb-4 font-alt">🚧 Projeto ainda em desenvolvimento!! 🚧</p>
            <main className="flex flex-col-reverse max-w-7xl m-auto px-4 py-8 mb-4" id="home">
                <section className="flex flex-col justify-evenly max-w-screen-sm p-4">
                    <h1 className="text-3xl font-alt mb-4">Olá! Sou <span className="text-[#666BF6]">Toscano</span>, Desenvolvedor Web</h1>
                    <p className="text-lg font-normal">Me chamo Gabriel Toscano, sou de Goiânia - GO. Desenvolvedor Full-Stack, entusiasta no mundo de desenvolvimento, apaixonado por jogos, músicas. <br /> Estou sempre em busca de novas oportunidades para aperfeiçoar minhas habilidades e trabalhar em projetos desafiadores.</p>
                </section>
                <section> <Image src={ webImage } alt="Web Development image" max-width="100%"/></section>
            </main>
        </div>
    );
}