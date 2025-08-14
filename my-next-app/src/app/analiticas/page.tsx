import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Image from "next/image";
import AnalyticsTable from "@/components/AnalyticsTable";
import { Anton } from 'next/font/google';

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
});

export default function AnaliticasPage() {
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
            totalUsuarios={1234} 
            nuevosUsuarios={56} 
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
