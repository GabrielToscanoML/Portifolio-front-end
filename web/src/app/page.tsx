"use client";

import { AboutMe } from "@/components/AboutMe";
import { Header } from "@/components/Header";
import { NavBar } from "@/components/NavBar";
import { ProjectsSession } from "@/components/ProjectsSession";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
// import Modal from "react-modal";


// import webImage from "../public/web-development.png";

export default function Home() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (navigator.userAgent.match(/Instagram/i)) {
      const link = document.createElement('a');
        link.href = '/';
        link.download = '';
        link.click();
        router.push('/');
    }
  }, []);

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>  
      {/* <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          className="flex mx-auto mt-48 justify-center items-center w-64 h-32"
        >
          <a 
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            download
            onClick={() => router.push("/")}
            className="bg-red-400 text-white p-4 rounded"
            >
              Abrir no navegador
          </a>
      </Modal> */}
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
