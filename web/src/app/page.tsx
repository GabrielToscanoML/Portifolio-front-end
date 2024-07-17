"use client";

import { AboutMe } from "@/components/AboutMe";
import { Header } from "@/components/Header";
import { NavBar } from "@/components/NavBar";
import { ProjectsSession } from "@/components/ProjectsSession";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Modal from "react-modal";

// import webImage from "../public/web-development.png";

export default function Home() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (navigator.userAgent.match(/Instagram/i)) {
      setIsOpen(true);
    }
  }, []);

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>  
      <form onSubmit={() => router.push("/")}>
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            className="flex mx-auto mt-48 justify-center items-center w-64 h-32"
          >
            {/* <a 
              href="/download"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white p-4 rounded"
              >
                Abrir no navegador
            </a> */}
            <button 
              type="submit"
              className="bg-red-300 text-white p-4 rounded"
              >
                Abrir no navegador
            </button>
        </Modal>
      </form>
      <div className="sticky top-0 bg-white">
        <NavBar />
        <hr />
      </div>
      <Header />
      <AboutMe />
      <hr />
      <ProjectsSession />
    </>
  );
}
