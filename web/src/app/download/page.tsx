"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Download() {
  const router = useRouter();

    useEffect(() => {
        const link = document.createElement('a');
        link.href = '/web-development.png'; // URL da imagem na nuvem
        link.download = 'web-development.png';
        link.click();
        router.push('/');
    }, [router]);

  return (
    <div className="flex justify-center items-center h-screen">
      <p>Iniciando o download...</p>
    </div>
  );
}