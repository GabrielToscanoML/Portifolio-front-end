import { allProjects } from "@/utils/projectsMock";
import { ProjectsCard } from "./ProjectsCard";


export function ProjectsSession() {
    return(
        <main id="projects" className="max-w-7xl m-auto px-8 py-20 pt-[160px]">
            <h2 className="text-4xl font-alt mb-8">Projetos</h2>
            <h4 className="text-3xl text-center mb-4 font-alt">🚧 Deploy das aplicações front-end em desenvolvimento! 🚧</h4>
            <section className="flex flex-wrap gap-8">
                {
                    allProjects.map((project) => {
                        return(
                            <ProjectsCard
                                id={project.id}
                                title={project.title}
                                description={project.description}
                                category={project.category}
                                github={project.github}
                                deploy={project.deploy}
                                imagePath={project.imagePath}
                                hardSkills={project.hardSkills}
                                key={project.id}
                            />
                        )
                    })
                }

            </section>
        </main>
    );
}