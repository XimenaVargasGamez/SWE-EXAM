// Import necessary components and utilities
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Be_Vietnam_Pro, Anton } from 'next/font/google';

// Configure primary font for body text
const beVietnamPro = Be_Vietnam_Pro({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

// Configure display font for headings
const anton = Anton({
  weight: '400',
  subsets: ['latin'],
});

// Main page component for user management
export default function UsuariosPage() {
  return (
    // Page wrapper with minimum height and flex layout
    <div className="min-h-[1100px] flex flex-col">
      {/* Header navigation component */}
      <NavBar />
      {/* Main content section with background */}
      <div className="flex-1 relative">
        {/* Background image setup */}
        <Image
          src="/backdrop.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* Content overlay with centered layout */}
        <main className="relative z-10 flex-1 flex items-center justify-center px-6 mt-[100px]">
          {/* Main content container */}
          <div className="text-center">
            {/* Page main title */}
            <h1 className={`${anton.className} text-[50px] text-[#FFFEFB] tracking-[4px] mb-[-20px]`}>
              Manejo de Usuarios
            </h1>
            {/* Page description subtitle */}
            <p className={`${anton.className} text-[20px] text-[#FFFEFB] mb-[100px]`}>
              Aquí puede gestionar los usuarios del sistema
            </p>
            {/* Two-column action menu layout */}
            <div className="flex justify-center items-center gap-[40px]">
              {/* Left section - User registration */}
              <div className="flex flex-col items-center justify-center border-r-3 border-white pr-[40px] h-full ">
                {/* Registration section title */}
                <h2 className={`${beVietnamPro.className} text-[#FFFEFB] mb-4 mr-[30px]`}>
                  Registrar <br /> Usuario
                </h2>
                {/* Navigation link to register page */}
                <a href="/usuarios/register">
                  {/* Register action button with hover effect */}
                  <button
                    className={`${beVietnamPro.className} text-[20px] text-[#0071BD] bg-[#FDFBFF] border-none px-[70px] py-[15px] mr-[30px] rounded-[13px] shadow-[500px] transition-transform duration-200 hover:scale-105`}
                  >
                    Continuar
                  </button>
                </a>
              </div>
              {/* Right section - User list management */}
              <div className="flex flex-col items-center justify-center pl-[40px] h-full">
                {/* User list section title */}
                <h2 className={`${beVietnamPro.className} text-[#FFFEFB] mb-4 ml-[10px]`}>
                  Lista de <br /> Usuarios
                </h2>
                {/* Navigation link to user list page */}
                <a href="/usuarios/list">
                  {/* List view action button with hover effect */}
                  <button
                    className={`${beVietnamPro.className} text-[20px] text-[#0071BD] bg-[#FDFBFF] border-none px-[70px] py-[15px] ml-[10px] rounded-[13px] shadow-[500px] transition-transform duration-200 hover:scale-105`}
                  >
                    Continuar
                  </button>
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
      {/* Footer component */}
      <Footer />
    </div>
  );
}