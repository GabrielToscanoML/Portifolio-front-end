"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function InstagramRedirect() {
  const router = useRouter();

  useEffect(() => {
    if (navigator.userAgent.match(/Instagram/i)) {
      const currentUrl = `https://toscano.vercel.app${window.location.pathname}`;
      const link = document.createElement('a');
        link.href = `x-web-search://?${link}`;
        link.download = '';
        link.click();
        router.push(currentUrl);
    }
  }, []);

  return null;
}