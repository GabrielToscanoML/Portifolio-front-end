import { AboutMe } from "@/components/AboutMe";
import { Header } from "@/components/Header";
import { NavBar } from "@/components/NavBar";

export default function Home() {
  return (
    <>
    <div className="sticky top-0 bg-white">
      <NavBar />
      <hr />
    </div>
      <Header />
      <AboutMe />
    </>
  )
}
