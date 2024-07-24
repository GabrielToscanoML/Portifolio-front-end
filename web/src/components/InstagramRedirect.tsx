"use client";

import { useEffect } from "react";

export default function InstagramRedirect() {
  useEffect(() => {
    if (navigator.userAgent.match(/Instagram/i) || navigator.userAgent.match(/Gmail/i)) {
      if (navigator.userAgent.match(/iPad|iPhone|iPod/i)) {
        const currentUrl = `https://toscano.vercel.app${window.location.pathname}`;
        // Se for um dispositivo iOS
        const link = document.createElement('a');
        link.href = `x-web-search://${currentUrl}`;
        link.download = '';
        link.click();
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