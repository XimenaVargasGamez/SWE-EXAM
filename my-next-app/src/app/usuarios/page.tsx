import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Be_Vietnam_Pro, Anton } from 'next/font/google';

const beVietnamPro = Be_Vietnam_Pro({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
});

export default function UsuariosPage() {
  return (
    <div className="min-h-[1100px] flex flex-col">
      <NavBar />
      <div className="flex-1 relative">
        <Image
          src="/backdrop.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <main className="relative z-10 flex-1 flex items-center justify-center px-6 mt-[100px]">
          <div className="text-center">
            <h1 className={`${anton.className} text-[50px] text-[#FFFEFB] tracking-[4px] mb-[-20px]`}>
              Manejo de Usuarios
            </h1>
            <p className={`${anton.className} text-[20px] text-[#FFFEFB] mb-[100px]`}>
              Aquí puede gestionar los usuarios del sistema
            </p>
            <div className="flex justify-center items-center gap-[40px]">
              <div className="flex flex-col items-center justify-center border-r-3 border-white pr-[40px] h-full ">
                <h2 className={`${beVietnamPro.className} text-[#FFFEFB] mb-4 mr-[30px]`}>
                  Registrar <br /> Usuario
                </h2>
                <a href="/usuarios/register">
                  <button
                    className={`${beVietnamPro.className} text-[20px] text-[#0071BD] bg-[#FDFBFF] border-none px-[70px] py-[15px] mr-[30px] rounded-[13px] shadow-[500px] transition-transform duration-200 hover:scale-105`}
                  >
                    Continuar
                  </button>
                </a>
              </div>
              <div className="flex flex-col items-center justify-center pl-[40px] h-full">
                <h2 className={`${beVietnamPro.className} text-[#FFFEFB] mb-4 ml-[10px]`}>
                  Lista de <br /> Usuarios
                </h2>
                <a href="/usuarios/list">
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
      <Footer />
    </div>
  );
}
