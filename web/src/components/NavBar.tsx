import Image from "next/image";
import githubSvg from "../assets/github-30.svg";
import linkedinSvg from "../assets/linkedin-30.svg";
import Link from "next/link";

export function NavBar() {
    return(
        <nav className="flex justify-between items-center h-24 max-w-7xl mx-auto sm:px-8">
            <Link href="https://github.com/gabrieltoscanoml" target="_blank" className="hidden sm:block">
                <div className="font-bold text-2xl">
                    Toscano
                </div>
            </Link>
            <ul className="flex gap-x-4 items-center text-lg font-medium mx-auto sm:mx-0">
                <a href="#home"><li className="border-[#666BF6] hover:border-b-2">Início</li></a>
                <a href="#aboutme"><li className="border-[#666BF6] hover:border-b-2">Sobre Mim</li></a>
                <a href="#home"><li className="border-[#666BF6] hover:border-b-2">Contatos</li></a>
                <a href="#projects"><li className="border-[#666BF6] hover:border-b-2">Projetos</li></a>
                <section className="hidden sm:flex sm:gap-4">
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
                </section>
            </ul>
        </nav>
    )
}