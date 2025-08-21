'use client';
// Import required components and utilities
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import UserTable from "@/components/UserTable";
import Image from "next/image";
import { Anton } from 'next/font/google';
import { useEffect, useState } from "react";
import { UserService } from "@/services/userService";
import type { User } from "@/types/user"; // Adjust the import path as needed

// Font configuration for headings
const anton = Anton({
  weight: '400',
  subsets: ['latin'],
});

// Main component for displaying user list page
export default function UserListPage() {
  // State for storing user data array
  const [users, setUsers] = useState<User[]>([]);
  // State for managing loading status
  const [loading, setLoading] = useState(true);

  // Effect hook to fetch users data on component mount
  useEffect(() => {
    // Async function to retrieve users from service
    const fetchUsers = async () => {
      try {
        setLoading(true);
        // Call user service to get all users
        const userArray = await UserService.getUsers();
        setUsers(userArray);
      } catch (err) {
        // Handle any errors during data fetching
        console.error('Error fetching users:', err);
      } finally {
        // Always set loading to false when done
        setLoading(false);
      }
    };

    // Execute fetch function
    fetchUsers();
  }, []);
  return (
    // Main page container with minimum height and flex layout - fixed for mobile gap
    <div className="min-h-screen md:min-h-[1100px] flex flex-col">
      {/* Navigation bar component */}
      <NavBar />
      {/* Main content area with background - flex-grow added */}
      <div className="relative min-h-[80px] md:min-h-[100px] flex-1">
        {/* Background image */}
        <Image
          src="/backdrop.png"
          alt="Background"
          fill
          className="object-cover object-center"
          priority
        />
          {/* Main content overlay with scrollable container */}
          <main className="relative z-10 flex flex-col items-center px-[16px] md:px-[24px] pt-[50px] md:pt-[100px] max-h-[700px] md:max-h-[1100px] overflow-y-auto">
          {/* Page title */}
          <h1
            className={`${anton.className} text-[24px] md:text-[50px] text-[#FFFEFB] tracking-[2px] md:tracking-[4px] mb-[-10px] md:mb-[-20px]`}
          >
            Lista de Usuarios
          </h1>
          {/* Loading state indicator */}
          {loading && (
            <div className={`${anton.className} text-[#FFFEFB] text-[14px] md:text-[20px] mt-[12px] md:mt-[20px] mb-[-12px] md:mb-[-20px]`}>
              Cargando usuarios...
            </div>
          )}
          {/* User table component when data is loaded */}
          {!loading && (
            <UserTable users={users} />
          )}
        </main>
      </div>
        {/* Footer component */}
        <Footer />
    </div>
  );
}