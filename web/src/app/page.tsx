import { AboutMe } from "@/components/AboutMe";
import { Header } from "@/components/Header";
import { NavBar } from "@/components/NavBar";
import { ProjectsSession } from "@/components/ProjectsSession";

export default function Home() {
  return (
    <>
    <div className="sticky top-0 bg-white">
      <NavBar />
      <hr />
    </div>
    <p className="text-center mb-4 font-alt ">🚧 Projeto ainda em desenvolvimento!! 🚧</p>
      <Header />
      <AboutMe />
      <hr />
      <ProjectsSession />
    </>
  )
}
