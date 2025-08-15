import React from "react";
import { Be_Vietnam_Pro } from 'next/font/google';
import type { User } from "@/types/user";

const beVietnamPro = Be_Vietnam_Pro({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

interface UserTableProps {
  users: User[];
}

export default function UserTable({ users }: UserTableProps) {
  return (
    <div className="max-w-[1000px] mx-auto px-[20px]">
      <table className="min-w-[700px] w-full border-collapse mt-[70px]">
        <thead>
          <tr>
            <th className={`${beVietnamPro.className} bg-[#C0C0C0] text-[#FFFEFB] text-center text-[20px] border border-[#FFFEFB] p-[10px]`}>
              ID
            </th>
            <th className={`${beVietnamPro.className} bg-[#C0C0C0] text-[#FFFEFB] text-center text-[20px] border border-[#FFFEFB] p-[10px]`}>
              Nombre de Usuario
            </th>
            <th className={`${beVietnamPro.className} bg-[#C0C0C0] text-[#FFFEFB] text-center text-[20px] border border-[#FFFEFB] p-[10px]`}>
              Correo Electrónico
            </th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td className={`${beVietnamPro.className} bg-[#FFFEFB] text-[#004C7F] text-center border border-[#C0C0C0] p-[10px]`}>
                  {user.id}
                </td>
                <td className={`${beVietnamPro.className} bg-[#FFFEFB] text-[#004C7F] text-center border border-[#C0C0C0] p-[10px]`}>
                  {user.username}
                </td>
                <td className={`${beVietnamPro.className} bg-[#FFFEFB] text-[#004C7F] text-center border border-[#C0C0C0] p-[10px]`}>
                  {user.email}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className={`${beVietnamPro.className} bg-[#FFFEFB] text-[#004C7F] text-center border border-[#C0C0C0] p-[10px]`}>
                -
              </td>
              <td className={`${beVietnamPro.className} bg-[#FFFEFB] text-[#004C7F] text-center border border-[#C0C0C0] p-[10px]`}>
                -
              </td>
              <td className={`${beVietnamPro.className} bg-[#FFFEFB] text-[#004C7F] text-center border border-[#C0C0C0] p-[10px]`}>
                -
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="text-center mt-[30px]">
        <p className={`${beVietnamPro.className} text-[#FFFEFB] text-[15px]`}>
          Total de Usuarios Registrados: {users.length}
        </p>
      </div>
    </div>
  );
}