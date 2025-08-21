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
  display: 'swap',
});

export default function AnaliticasPage() {
  // State for storing analytics data
  const [totalUsuarios, setTotalUsuarios] = useState<number | string>('Cargando...');
  const [nuevosUsuarios, setNuevosUsuarios] = useState<number | string>('Cargando...');
  const [isLoading, setIsLoading] = useState(true);

  // Effect to fetch analytics data on component mount and set up polling
  useEffect(() => {
    let isMounted = true;

    // Function to fetch analytics data from API
    const fetchAnalytics = async () => {
      try {
        const res = await fetch('/api/analytics', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        
        const data = await res.json();
        
        // Update state only if component is still mounted
        if (isMounted) {
          setTotalUsuarios(data.totalUsuarios || 0);
          setNuevosUsuarios(data.nuevosUsuarios || 0);
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Error fetching analytics:', error);
        // Set error state if request fails
        if (isMounted) {
          setTotalUsuarios('Error');
          setNuevosUsuarios('Error');
          setIsLoading(false);
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
    // Main page container with minimum height - fixed for mobile gap
    <div className="min-h-screen md:min-h-[1100px] flex flex-col">
      <NavBar />
      {/* Main content area with flex-grow */}
      <main className="flex-1 relative">
        {/* Background image */}
        <Image
          src="/backdrop.png"
          alt="Background"
          fill
          className="object-cover object-center md:object-cover"
          style={{
            objectPosition: 'center center'
          }}
          priority
          sizes="100vw"
        />
        {/* Content overlay */}
        <div className="text-center relative px-6 mt-[70px] md:mt-[130px] z-10">
          {/* Page title */}
          <h1 className={`${anton.className} text-[28px] md:text-[55px] text-[#FFFEFB] tracking-[2px] md:tracking-[4px] mb-[-10px] md:mb-[-20px]`}>
            Analíticas del Sistema
          </h1>
          {/* Page description */}
          <p className={`${anton.className} text-[12px] md:text-[20px] text-[#FFFEFB] mb-[50px] md:mb-[100px]`}>
            Visualización de datos del sistema
          </p>

          {/* Loading state */}
          {isLoading ? (
            <div className="flex justify-center items-center">
              <div className="animate-spin rounded-full h-8 w-8 md:h-12 md:w-12 border-b-2 border-white"></div>
            </div>
          ) : (
            /* Analytics table component with data props */
            <AnalyticsTable 
              totalUsuarios={totalUsuarios}
              nuevosUsuarios={nuevosUsuarios}
            />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}