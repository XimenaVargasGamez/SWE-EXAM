'use client';

// Import necessary components and dependencies
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Image from "next/image";
import AnalyticsTable from "@/components/AnalyticsTable";
import { Anton } from 'next/font/google';
import { useEffect, useState } from 'react';

// Configure Google Font
const anton = Anton({
  weight: '400',
  subsets: ['latin'],
});

export default function AnaliticasPage() {
  // State for storing analytics data
  const [totalUsuarios, setTotalUsuarios] = useState<number | string>('Cargando...');
  const [nuevosUsuarios, setNuevosUsuarios] = useState<number | string>('Cargando...');

  // Effect to fetch analytics data on component mount and set up polling
  useEffect(() => {
    let isMounted = true;

    // Function to fetch analytics data from API
    const fetchAnalytics = async () => {
      try {
        const res = await fetch('/api/analytics');
        const data = await res.json();
        if (!res.ok) throw new Error('Error al obtener analíticas');
        // Update state only if component is still mounted
        if (isMounted) {
          setTotalUsuarios(data.totalUsuarios);
          setNuevosUsuarios(data.nuevosUsuarios);
        }
      } catch {
        // Set error state if request fails
        if (isMounted) {
          setTotalUsuarios('Error');
          setNuevosUsuarios('Error');
        }
      }
    };

    // Initial fetch and set up polling every 30 seconds
    fetchAnalytics();
    const interval = setInterval(fetchAnalytics, 30000);
    
    // Cleanup function
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  return (
    // Main page container with minimum height
    <div className="min-h-[1100px] flex flex-col">
      <NavBar />
      {/* Main content area with flex-grow */}
      <main className="flex-1 relative">
        {/* Background image */}
        <Image
          src="/backdrop.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* Content overlay */}
        <div className="text-center relative px-6 mt-[130px]">
          {/* Page title */}
          <h1 className={`${anton.className} text-[55px] text-[#FFFEFB] tracking-[4px] mb-[-20px]`}>
            Analíticas del Sistema
          </h1>
          {/* Page description */}
          <p className={`${anton.className} text-[20px] text-[#FFFEFB] mb-[100px]`}>
            Visualización de datos del sistema
          </p>

          {/* Analytics table component with data props */}
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