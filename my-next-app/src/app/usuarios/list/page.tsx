'use client';
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import UserTable from "@/components/UserTable";
import Image from "next/image";
import { Anton } from 'next/font/google';
import { useEffect, useState } from "react";
import { UserService } from "@/services/userService";
import type { User } from "@/types/user"; // Adjust the import path as needed

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
});

export default function UserListPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const userArray = await UserService.getUsers();
        setUsers(userArray);
      } catch (err) {
        console.error('Error fetching users:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);
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
          {loading && (
            <div className={`${anton.className} text-[#FFFEFB text-[20px] mt-[20px] mb-[-20px]`}>
              Cargando usuarios...
            </div>
          )}
          {!loading && (
            <UserTable users={users} />
          )}
        </main>
      </div>
        <Footer />
    </div>
  );
}
