'use client';

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import UserForm from "@/components/UserForm";
import Image from "next/image";
import { Anton } from 'next/font/google';

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
});

export default function UserRegisterPage() {
  const handleUserSubmit = (username: string, email: string) => {
    console.log(`User registered successfully: ${username} (${email})`);
  };
  return (
    // Page wrapper with minimum height and flex layout - fixed for mobile gap
    <div className="min-h-screen md:min-h-[1100px] flex flex-col">
      <NavBar />
      {/* Main content section with flex-grow */}
      <div className="relative min-h-[80px] md:min-h-[100px] flex-1">
        <Image
          src="/backdrop.png"
          alt="Background"
          fill
          className="object-cover object-center"
          priority
        />
        <main className="relative z-10 flex flex-col items-center justify-center px-[16px] md:px-[24px] py-[30px] md:py-[50px] pt-[50px] md:pt-[100px] max-h-[700px] md:max-h-[1100px] overflow-y-auto">
          <h1
            className={`${anton.className} text-[24px] md:text-[50px] text-[#FFFEFB] tracking-[2px] md:tracking-[4px] mb-[30px] md:mb-[50px] text-center`}
          >
            Registrar Usuario
          </h1>
          <UserForm onSubmit={handleUserSubmit} />
        </main>
      </div>
      <Footer />
    </div>
  );
}