'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Download() {
  const router = useRouter();

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const isInstagram = userAgent.match(/Instagram/i);

    if (!isInstagram) {
      const link = document.createElement('a');
      link.href = '/web-development.png';
      link.download = 'web-development.png';
      link.target = '_blank';
      link.click();
      router.push('/');
    }
  }, [router]);

  return (
    <div className="flex justify-center items-center h-screen">
      <p>Iniciando o download...</p>
    </div>
  );
}
