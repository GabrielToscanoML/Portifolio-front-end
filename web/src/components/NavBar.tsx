import Image from "next/image";
import githubSvg from "../assets/github-30.svg";
import linkedinSvg from "../assets/linkedin-30.svg";

export function NavBar() {
    return(
        <header className="flex justify-between items-center h-24 max-w-7xl m-auto px-8">
            <div className="font-bold text-2xl">
                Toscano
            </div>
            <div className="mr-16">
                <ul className="flex gap-x-4 items-center text-lg">
                    <a href="#home"><li className="border-[#666BF6] hover:border-b-2">Início</li></a>
                    <a href="#aboutme"><li className="border-[#666BF6] hover:border-b-2">Sobre Mim</li></a>
                    <a href="#projects"><li className="border-[#666BF6] hover:border-b-2">Projetos</li></a>
                    <a href="#contact"><li className="border-[#666BF6] hover:border-b-2">Contatos</li></a>
                    |
                    <a
                        href="https://github.com/gabrieltoscanoml"
                        target="_blank"
                    >
                        <Image src={ githubSvg } alt="Github icon" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/gabrieltoscanoml/"
                        target="_blank"
                    >
                        <Image src={ linkedinSvg } alt="Linkedin icon" />
                    </a>
                </ul>
            </div>
        </header>
    )
}