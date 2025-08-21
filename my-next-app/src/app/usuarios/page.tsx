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
    // Page wrapper with minimum height and flex layout - fixed for mobile gap
    <div className="min-h-screen md:min-h-[1100px] flex flex-col">
      {/* Header navigation component */}
      <NavBar />
      {/* Main content section with background - flex-grow added */}
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
        <main className="relative z-10 flex-1 flex items-center justify-center px-4 md:px-6 mt-[50px] md:mt-[100px]">
          {/* Main content container */}
          <div className="text-center">
            {/* Page main title */}
            <h1 className={`${anton.className} text-[24px] md:text-[50px] text-[#FFFEFB] tracking-[2px] md:tracking-[4px] mb-[-10px] md:mb-[-20px]`}>
              Manejo de Usuarios
            </h1>
            {/* Page description subtitle */}
            <p className={`${anton.className} text-[12px] md:text-[20px] text-[#FFFEFB] mb-[40px] md:mb-[100px]`}>
              Aquí puede gestionar los usuarios del sistema
            </p>
            {/* Two-column action menu layout */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-[20px] md:gap-[40px]">
              {/* Left section - User registration */}
              <div className="flex flex-col items-center justify-center md:border-r-3 border-white md:pr-[40px] pb-[20px] md:pb-0 h-full ">
                {/* Registration section title */}
                <h2 className={`${beVietnamPro.className} text-[16px] md:text-[18px] text-[#FFFEFB] mb-3 md:mb-4 md:mr-[30px]`}>
                  Registrar <br /> Usuario
                </h2>
                {/* Navigation link to register page */}
                <a href="/usuarios/register">
                  {/* Register action button with hover effect */}
                  <button
                    className={`${beVietnamPro.className} text-[16px] md:text-[20px] text-[#0071BD] bg-[#FDFBFF] border-none px-[50px] md:px-[70px] py-[12px] md:py-[15px] md:mr-[30px] rounded-[10px] md:rounded-[13px] shadow-[500px] transition-transform duration-200 hover:scale-105`}
                  >
                    Continuar
                  </button>
                </a>
              </div>
              {/* Right section - User list management */}
              <div className="flex flex-col items-center justify-center md:pl-[40px] pt-[20px] md:pt-0 h-full">
                {/* User list section title */}
                <h2 className={`${beVietnamPro.className} text-[16px] md:text-[18px] text-[#FFFEFB] mb-3 md:mb-4 md:ml-[-30px]`}>
                  Lista de <br /> Usuarios
                </h2>
                {/* Navigation link to user list page */}
                <a href="/usuarios/list">
                  {/* List view action button with hover effect */}
                  <button
                    className={`${beVietnamPro.className} text-[16px] md:text-[20px] text-[#0071BD] bg-[#FDFBFF] border-none px-[50px] md:px-[70px] py-[12px] md:py-[15px] md:mr-[30px] rounded-[10px] md:rounded-[13px] shadow-[500px] transition-transform duration-200 hover:scale-105 md:mb-[40px]`}
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