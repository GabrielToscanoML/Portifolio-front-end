import { HardSkills } from "@/types/HardSkill";
import { Project } from "@/types/Project";
import Image from "next/image";

export function ProjectsCard(props: Project) {
    return(
        <main className="border-2 border-black w-96 h-600 rounded-xl bg-[#343541]">
            <h1 className="text-4xl font-alt m-4">{props.title}</h1>
            <section className="flex justify-evenly">
                {
                    props.hardSkills.map((tech: HardSkills) => {
                        return (
                            <div
                                key={tech.name}
                                className="flex flex-col justify-center items-center">
                                <Image src={ tech.imagePath } alt="Imagem da tecnlogia" width={50} height={50}
                                />
                                <p>{tech.name}</p> 
                            </div>
                        )
                    })
                }
            </section>
            <hr />
            <Image
                src={ props.imagePath }
                alt="Imagem do projeto"
                width="250"
                height={250}
                style={{width: '98%', marginLeft: "auto", marginRight: "auto"}}
            />
            <hr />
            <h3 className="text-2xl font-alt text-center">{props.category}</h3>
            <p>{props.description}</p>
            <section>
                { props.deploy &&
                <a href={props.deploy} target="_blank">
                    <button type="button">Ver o Projeto</button>
                </a>}
                <a href={props.github} target="_blank">
                    <button type="button">Github</button>
                </a>
            </section>
        </main>
    );
}