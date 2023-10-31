import Image from "next/image";
import githubSvg from "../assets/github-30.svg";
import linkedinSvg from "../assets/linkedin-30.svg";

export function NavBar() {
    return(
        <header className="flex justify-between items-center h-24 max-w-7xl m-auto  px-8">
            <div className="font-bold text-2xl">
                Toscano
            </div>
            <div className="mr-16">
                <ul className="flex gap-x-4 items-center text-lg">
                    <li
                        className="border-[#666BF6] hover:border-b-2"
                    >
                        <a href="">Início</a>
                    </li>
                    <li className="border-[#666BF6] hover:border-b-2"><a href="">Sobre Mim</a></li>
                    <li className="border-[#666BF6] hover:border-b-2"><a href="">Contatos</a></li>
                    <li className="border-[#666BF6] hover:border-b-2"><a href="">Projetos</a></li>
                    |
                    <a
                        href="https://github.com/gabrieltoscanoml"
                        target="_blank"
                    >
                        <Image src={ githubSvg } alt="" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/gabrieltoscanoml/"
                        target="_blank"
                    >
                        <Image src={ linkedinSvg } alt="" />
                    </a>
                </ul>
            </div>
        </header>
    )
}