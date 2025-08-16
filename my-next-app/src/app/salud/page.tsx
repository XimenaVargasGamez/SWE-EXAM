'use client';

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Be_Vietnam_Pro, Anton } from 'next/font/google';
import { useEffect, useState } from 'react';

// Font configurations for styling
const beVietnamPro = Be_Vietnam_Pro({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
});

// Type definition for health API response
interface HealthData {
  message: string;
}

// Component that handles server health checking logic with polling
function ServerHealth() {
  // State variables for managing component data and UI states
  const [healthData, setHealthData] = useState<HealthData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [httpStatus, setHttpStatus] = useState<number | null>(null);

  // Effect hook to check server health on component mount and set up polling
  useEffect(() => {
    // Async function to fetch health data from API
    const checkHealth = async () => {
      try {
        setLoading(true);
        // API call to health endpoint
        const response = await fetch('/api/health');
        setHttpStatus(response.status);
        const data = await response.json();
        
        // Handle successful response
        if (response.ok) {
          setHealthData(data);
        } else {
          // Handle API errors
          setError(`Error ${response.status}: ${data.message || 'Error del servidor'}`);
        }
      } catch (err) {
        // Handle network or other errors
        setError('Error - no pudimos comunicarnos con el servidor.');
      } finally {
        setLoading(false);
      }
    };

    // Initial health check
    checkHealth();

    // Set up polling every 60 seconds
    const interval = setInterval(checkHealth, 60000);
    
    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Loading state UI
  if (loading) {
    return (
      <div className={`${beVietnamPro.className} text-[25px] text-[#FFFEFB] text-center`}>
        Revisando salud del servidor...
      </div>
    );
  }

  // Error state UI
  if (error) {
    return (
      <div className={`${beVietnamPro.className} text-[25px] text-[#FFFEFB] text-center`}>
        {error}
      </div>
    );
  }

  // No data state UI
  if (!healthData) {
    return (
      <div className={`${beVietnamPro.className} text-[25px] text-[#FFFEFB] text-center`}>
        No se pudo obtener información del servidor
      </div>
    );
  }

  // Success state - display health data
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

// Main page component for system health monitoring
export default function SaludPage() {
  return (
    <div className="min-h-[1100px] flex flex-col">
      {/* Navigation component */}
      <NavBar />
      {/* Main content area with background image */}
      <main className="flex-1 relative">
        {/* Background image */}
        <Image
          src="/backdrop.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* Content overlay with page title and health component */}
        <div className="text-center relative px-6 pt-[100px] pb-[50px]">
          {/* Page title */}
          <h1 className={`${anton.className} text-[55px] text-[#FFFEFB] tracking-[4px] mb-[-20px]`}>
            Salud del Sistema
          </h1>
          {/* Page subtitle */}
          <p className={`${anton.className} text-[20px] text-[#FFFEFB] mb-[50px]`}>
            Monitoreo de la salud del sistema
          </p>
          {/* Server health monitoring component */}
          <ServerHealth />
        </div>
      </main>
      {/* Footer component */}
      <Footer />
    </div>
  );
}