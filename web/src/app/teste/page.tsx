"use client";

import { AboutMe } from "@/components/AboutMe";
import { Header } from "@/components/Header";
import { NavBar } from "@/components/NavBar";
import { ProjectsSession } from "@/components/ProjectsSession";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Teste() {
  const router = useRouter();

  useEffect(() => {
    if (navigator.userAgent.match(/Instagram/i)) {
      const currentUrl = window.location.href;
      const link = document.createElement('a');
        link.href = '/';
        link.download = '';
        link.click();
        router.push(currentUrl);
    }
  }, []);

  return (
    <>  
      <h1>OLÁAAAAAAAAAA</h1>
    </>
  );
}
