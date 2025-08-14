import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import UserTable from "@/components/UserTable";
import Image from "next/image";
import { Anton } from 'next/font/google';

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
});

//ejemplos (para poder visualizar)
const mockUsers = [
  { id: 1, username: "usuario1", email: "usuario1@gmail.com" },
  { id: 2, username: "usuario2", email: "usuario2@gmail.com" },
  { id: 3, username: "usuario3", email: "usuario3@gmail.com" },
];

export default function UserListPage() {
  return (
    <div className="min-h-[1100px] flex flex-col">
      <NavBar />
      <div className="relative min-h-[100px] flex-1">
        <Image
          src="/backdrop.png"
          alt="Background"
          fill
          className="object-cover object-center"
          priority
        />

        <main className="relative z-10 flex flex-col items-center px-[24px] pt-[100px] max-h-[1100px] overflow-y-auto">
            <h1
                className={`${anton.className} text-[50px] text-[#FFFEFB] tracking-[4px] mb-[-20px]`}
            >
                Lista de Usuarios
            </h1>
          <UserTable users={mockUsers} />
        </main>
      </div>

      <Footer />
    </div>
  );
}
