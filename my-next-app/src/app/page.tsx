import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Be_Vietnam_Pro, Anton } from 'next/font/google';

const beVietnamPro = Be_Vietnam_Pro({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
});

export default function MainPage() {
  return (
    <div className="min-h-[1150px] flex flex-col"> 
      <NavBar />
      <div className="flex-1 relative">
        <Image
          src="/backdrop.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <main className="relative z-10 flex items-center justify-center min-h-[900px] px-[24px]"> 
          <div className="text-center text-[#FFFEFB]">
            <h1 className="text-[70px] font-['Anton'] tracking-[4px] mb-[-30px] mt-[-200px]">
              Examen LKMX
            </h1>
            <p className="text-[20px] font-['Anton'] tracking-[4px] mb-[100px] md:text-[50px] uppercase ">
              XIMENA VARGAS GÁMEZ
            </p>
            <Link href="/usuarios">
              <button
                className={`${beVietnamPro.className} text-[20px] text-[#0071BD] bg-[#FDFBFF] border-none px-[105px] py-[15px] rounded-[13px] shadow-[500px] transition-transform duration-200 hover:scale-105`}
              >
                Iniciar
              </button>
            </Link>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
