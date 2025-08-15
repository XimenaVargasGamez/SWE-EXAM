'use client';

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Be_Vietnam_Pro, Anton } from 'next/font/google';
import { useEffect, useState } from 'react';

const beVietnamPro = Be_Vietnam_Pro({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
});

interface HealthData {
  message: string;
}

function ServerHealth() {
  const [healthData, setHealthData] = useState<HealthData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [httpStatus, setHttpStatus] = useState<number | null>(null);

  useEffect(() => {
    const checkHealth = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/health');
        setHttpStatus(response.status);
        const data = await response.json();
        
        if (response.ok) {
          setHealthData(data);
        } else {
          setError(`Error ${response.status}: ${data.message || 'Error del servidor'}`);
        }
      } catch (err) {
        setError('Error - no pudimos comunicarnos con el servidor.');
      } finally {
        setLoading(false);
      }
    };

    checkHealth();
    
    // Revisa la salud cada 60 seg
    const interval = setInterval(checkHealth, 60000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className={`${beVietnamPro.className} text-[25px] text-[#FFFEFB] text-center`}>
        Revisando salud del servidor...
      </div>
    );
  }

  if (error) {
    return (
      <div className={`${beVietnamPro.className} text-[25px] text-[#FFFEFB] text-center`}>
        {error}
      </div>
    );
  }

  if (!healthData) {
    return (
      <div className={`${beVietnamPro.className} text-[25px] text-[#FFFEFB] text-center`}>
        No se pudo obtener información del servidor
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className={`${beVietnamPro.className} text-[35px] text-[#FFFEFB] text-center font-bold`}>
        HTTP Status: {httpStatus}
      </div>
      <div className={`${beVietnamPro.className} text-[35px] text-[#FFFEFB] text-center font-bold`}>
        {healthData.message}
      </div>
    </div>
  );
}

export default function SaludPage() {
  return (
    <div className="min-h-[1100px] flex flex-col">
      <NavBar />
      <main className="flex-1 relative">
        <Image
          src="/backdrop.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="text-center relative px-6 pt-[100px] pb-[50px]">
          <h1 className={`${anton.className} text-[55px] text-[#FFFEFB] tracking-[4px] mb-[-20px]`}>
            Salud del Sistema
          </h1>
          <p className={`${anton.className} text-[20px] text-[#FFFEFB] mb-[50px]`}>
            Monitoreo de la salud del sistema
          </p>
          <ServerHealth />
        </div>
      </main>
      <Footer />
    </div>
  );
}
