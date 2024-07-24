"use client";

import { useEffect } from "react";

export default function InstagramRedirect() {
  useEffect(() => {
    if (navigator.userAgent.match(/Instagram/i) || navigator.userAgent.match(/Gmail/i)) {
      if (navigator.userAgent.match(/iPad|iPhone|iPod/i)) {
        alert("Para uma melhor experiência, por favor, abra este link no navegador padrão do seu dispositivo.");
      } else {
        // Para outros dispositivos
        const currentPath = window.location.pathname;
        const link = document.createElement('a');
        link.href =  `https://toscano.vercel.app${currentPath}`;
        link.download = '';
        link.click();
      }
    }
  }, []);
  return null
}