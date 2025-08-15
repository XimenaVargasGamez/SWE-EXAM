import React from "react";
import { Be_Vietnam_Pro } from 'next/font/google';
import type { User } from "@/types/user";

// Configure Google font with specific weights and subsets
const beVietnamPro = Be_Vietnam_Pro({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

// Component props interface definition
interface UserTableProps {
  users: User[];
}

// Main component that renders a user data table
export default function UserTable({ users }: UserTableProps) {
  return (
    // Main container with max width and center alignment
    <div className="max-w-[1000px] mx-auto px-[20px]">
      {/* Table with minimum width and border styling */}
      <table className="min-w-[700px] w-full border-collapse mt-[70px]">
        {/* Table header section */}
        <thead>
          <tr>
            {/* ID column header */}
            <th className={`${beVietnamPro.className} bg-[#C0C0C0] text-[#FFFEFB] text-center text-[20px] border border-[#FFFEFB] p-[10px]`}>
              ID
            </th>
            {/* Username column header */}
            <th className={`${beVietnamPro.className} bg-[#C0C0C0] text-[#FFFEFB] text-center text-[20px] border border-[#FFFEFB] p-[10px]`}>
              Nombre de Usuario
            </th>
            {/* Email column header */}
            <th className={`${beVietnamPro.className} bg-[#C0C0C0] text-[#FFFEFB] text-center text-[20px] border border-[#FFFEFB] p-[10px]`}>
              Correo Electrónico
            </th>
          </tr>
        </thead>
        {/* Table body section */}
        <tbody>
          {/* Conditional rendering based on users array length */}
          {users.length > 0 ? (
            // Map through users array to create table rows
            users.map((user) => (
              <tr key={user.id}>
                {/* User ID cell */}
                <td className={`${beVietnamPro.className} bg-[#FFFEFB] text-[#004C7F] text-center border border-[#C0C0C0] p-[10px]`}>
                  {user.id}
                </td>
                {/* Username cell */}
                <td className={`${beVietnamPro.className} bg-[#FFFEFB] text-[#004C7F] text-center border border-[#C0C0C0] p-[10px]`}>
                  {user.username}
                </td>
                {/* Email cell */}
                <td className={`${beVietnamPro.className} bg-[#FFFEFB] text-[#004C7F] text-center border border-[#C0C0C0] p-[10px]`}>
                  {user.email}
                </td>
              </tr>
            ))
          ) : (
            // Empty state when no users are available
            <tr>
              {/* Empty ID cell */}
              <td className={`${beVietnamPro.className} bg-[#FFFEFB] text-[#004C7F] text-center border border-[#C0C0C0] p-[10px]`}>
                -
              </td>
              {/* Empty username cell */}
              <td className={`${beVietnamPro.className} bg-[#FFFEFB] text-[#004C7F] text-center border border-[#C0C0C0] p-[10px]`}>
                -
              </td>
              {/* Empty email cell */}
              <td className={`${beVietnamPro.className} bg-[#FFFEFB] text-[#004C7F] text-center border border-[#C0C0C0] p-[10px]`}>
                -
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {/* Footer section showing total user count */}
      <div className="text-center mt-[30px]">
        {/* Total users counter display */}
        <p className={`${beVietnamPro.className} text-[#FFFEFB] text-[15px]`}>
          Total de Usuarios Registrados: {users.length}
        </p>
      </div>
    </div>
  );
}