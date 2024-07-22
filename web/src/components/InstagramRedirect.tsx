"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function InstagramRedirect() {
  const router = useRouter();

  useEffect(() => {
    if (navigator.userAgent.match(/Instagram/i)) {
      const currentUrl = window.location.pathname;
      window.location.href = `https://sofoto.com.br${currentUrl}`;
    }
  }, []);

  return null;
}