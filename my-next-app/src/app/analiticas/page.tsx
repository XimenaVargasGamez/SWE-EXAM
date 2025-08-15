'use client';

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Image from "next/image";
import AnalyticsTable from "@/components/AnalyticsTable";
import { Anton } from 'next/font/google';
import { useEffect, useState } from 'react';

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
});

export default function AnaliticasPage() {
  const [totalUsuarios, setTotalUsuarios] = useState<number | string>('Cargando...');
  const [nuevosUsuarios, setNuevosUsuarios] = useState<number | string>('Cargando...');

  useEffect(() => {
    let isMounted = true;

    const fetchAnalytics = async () => {
      try {
        const res = await fetch('/api/analytics');
        const data = await res.json();
        if (!res.ok) throw new Error('Error al obtener analíticas');
        if (isMounted) {
          setTotalUsuarios(data.totalUsuarios);
          setNuevosUsuarios(data.nuevosUsuarios);
        }
      } catch {
        if (isMounted) {
          setTotalUsuarios('Error');
          setNuevosUsuarios('Error');
        }
      }
    };

    fetchAnalytics();
    const interval = setInterval(fetchAnalytics, 30000);
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

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
        <div className="text-center relative px-6 mt-[130px]">
          <h1 className={`${anton.className} text-[55px] text-[#FFFEFB] tracking-[4px] mb-[-20px]`}>
            Analíticas del Sistema
          </h1>
          <p className={`${anton.className} text-[20px] text-[#FFFEFB] mb-[100px]`}>
            Visualización de datos del sistema
          </p>

          <AnalyticsTable 
            totalUsuarios={totalUsuarios}
            nuevosUsuarios={nuevosUsuarios}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
