"use client";

import { AboutMe } from "@/components/AboutMe";
import { Header } from "@/components/Header";
import { NavBar } from "@/components/NavBar";
import { ProjectsSession } from "@/components/ProjectsSession";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
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

  return (
    <>  
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
