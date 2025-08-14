import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Anton } from 'next/font/google'

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
})

export default function MainPage() {
  return (
    <div className="min-h-[1000px] flex flex-col">
      <NavBar />

      <div className="flex-1 relative">
        <Image
          src="/backdrop.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />

        <main className="relative z-10 flex items-center justify-center min-h-[700px] px-[24px]">
          <div className="text-center text-[#FFFEFB]">
            <h1 className="text-[70px] font-['Anton'] tracking-[4px] mb-[-30px]">
              Examen LKMX
            </h1>

            <p className="text-[20px] font-['Anton'] tracking-[8px] mb-[100px] md:text-[50px] uppercase ">
              XIMENA VARGAS GÁMEZ
            </p>

            <Link href="/usuarios">
              <button className="bg-white text-blue-600 px-[48px] py-[16px] rounded-lg text-[18px] font-semibold transition-colors duration-200 shadow-lg">
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
