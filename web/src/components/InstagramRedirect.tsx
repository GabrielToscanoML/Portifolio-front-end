"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function InstagramRedirect() {
  const router = useRouter();

  useEffect(() => {
    if (navigator.userAgent.match(/Instagram/i)) {
      const currentUrl = window.location.pathname;
      const link = document.createElement('a');
        link.href = `https://toscano.vercel.app${currentUrl}`;
        link.download = '';
        link.click();
        router.push(currentUrl);
    }
  }, []);

  return null;
}