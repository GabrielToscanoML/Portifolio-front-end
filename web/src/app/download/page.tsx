'use client'

import { useEffect } from 'react';

export default function Download() {
  useEffect(() => {
    console.log("Download iniciado");
    const link = document.createElement('a');
    link.href = '/web-development.png';
    link.download = 'web-development.png';
    link.click();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <a href="/" className="bg-black text-white p-4 rounded">VOLTAR</a>
    </div>
  );
}