// Import necessary components and utilities
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Be_Vietnam_Pro } from 'next/font/google';

// Font configuration for button and text elements
const beVietnamPro = Be_Vietnam_Pro({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

// Main homepage component
export default function MainPage() {
  return (
    // Page container with minimum height and flex layout
    <div className="min-h-[1150px] flex flex-col"> 
      {/* Navigation header component */}
      <NavBar />
      {/* Main content area with background */}
      <div className="flex-1 relative">
        {/* Background image setup */}
        <Image
          src="/backdrop.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* Main content overlay with centered layout */}
        <main className="relative z-10 flex items-center justify-center min-h-[900px] px-[24px]"> 
          {/* Centered content container */}
          <div className="text-center text-[#FFFEFB]">
            {/* Main page title */}
            <h1 className="text-[70px] font-['Anton'] tracking-[4px] mb-[-30px] mt-[-200px]">
              Examen LKMX
            </h1>
            {/* Author name subtitle */}
            <p className="text-[20px] font-['Anton'] tracking-[4px] mb-[100px] md:text-[50px] uppercase ">
              XIMENA VARGAS GÁMEZ
            </p>
            {/* Navigation link to users section */}
            <Link href="/usuarios">
              {/* Start button with hover animation */}
              <button
                className={`${beVietnamPro.className} text-[20px] text-[#0071BD] bg-[#FDFBFF] border-none px-[105px] py-[15px] rounded-[13px] shadow-[500px] transition-transform duration-200 hover:scale-105`}
              >
                Iniciar
              </button>
            </Link>
          </div>
        </main>
      </div>
      {/* Footer component */}
      <Footer />
    </div>
  );
}