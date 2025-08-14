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


export default function SaludPage() {
  return (
    <div className="min-h-[1100px] flex flex-col">
      <NavBar />
      <main className="flex-1 relative ">
        <Image
          src="/backdrop.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="text-center relative px-6 mt-[130px] ">
          <h1 className={`${anton.className} text-[55px] text-[#FFFEFB] tracking-[4px] mb-[-20px]`}>
            Salud del Sistema
          </h1>
          <p className={`${anton.className} text-[20px] text-[#FFFEFB] mb-[100px]`}>
            Monitoreo y gestión del sistema de salud
          </p>
          <div className={`${beVietnamPro.className} text-[25px] text-[#FFFEFB] px-4 py-3`}>
            Sistema funcionando correctamente
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
