"use client"

import { AboutMe } from "@/components/AboutMe";
import { Header } from "@/components/Header";
import { NavBar } from "@/components/NavBar";
import { ProjectsSession } from "@/components/ProjectsSession";
import { useEffect, useState } from "react";
import Modal from "react-modal";

// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',  
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//     width: '200px',
//   },
// };

export default function Home() {

  const [modalIsOpen, setIsOpen] = useState(false);

  if (navigator.userAgent.match(/Instagram/i)) {
    alert("Para a melhor experiência, abra este link no seu navegador padrão.");
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    openModal();
  }, [])

  return (
    <>  
      <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          // style={customStyles}
          contentLabel="Example Modal"
          className="flex mx-auto mt-48 justify-center items-center w-64 h-32"
        >
          <a 
            href="https://toscano.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white p-4 rounded"
            >
              Abrir no navegador
            </a>
      </Modal>
      <div className="sticky top-0 bg-white">
        <NavBar />
        <hr />
      </div>
      <Header />
      <AboutMe />
      <hr />
      <ProjectsSession />
    </>
  )
}
