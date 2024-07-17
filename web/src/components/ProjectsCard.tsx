import { HardSkills } from "@/types/HardSkill";
import { Project } from "@/types/Project";
import Image from "next/image";

export function ProjectsCard(props: Project) {
    return(
        <main className="shadow-lg w-96 h-600 rounded-xl bg-[#F7EFE5]">
            <h1 className="text-3xl font-alt m-4">{props.title}</h1>
            <section className="flex justify-evenly mb-2">
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
                className="px-4 "
                style={{width: '95%', marginLeft: "auto", marginRight: "auto"}}
            />
            <hr />
            <h3 className="text-2xl font-alt text-center mt-2">{props.category}</h3>
            <section className="flex flex-col items-center justify-evenly h-48">
                <p className="text-center px-4 text-xl">{props.description}</p>
                <section className="flex w-full justify-evenly">
                    { props.deploy &&
                        <a href={props.deploy} target="_blank">
                            <button
                                className="bg-[#656BF6] text-white w-28 h-12 rounded-xl text-base font-alt"    
                                type="button"
                            >   
                                Visualizar
                            </button>
                        </a>
                    }
                    <a href={props.github} target="_blank">
                        <button
                            className="bg-[#656BF6] text-white w-28 h-12 rounded-xl text-base font-alt" 
                            type="button"
                        >
                            Github
                        </button>
                    </a>
                </section>
            </section>
        </main>
    );
}