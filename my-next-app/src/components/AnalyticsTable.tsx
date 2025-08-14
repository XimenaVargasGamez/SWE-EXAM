import React from "react";
import { Be_Vietnam_Pro } from 'next/font/google';

const beVietnamPro = Be_Vietnam_Pro({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

interface AnalyticsTableProps {
  totalUsuarios: number | string;
  nuevosUsuarios: number | string;
}

export default function AnalyticsTable({ totalUsuarios, nuevosUsuarios }: AnalyticsTableProps) {
  return (
    <div className="max-w-[1500px] mx-auto items-center">
      <table className="ml-[300px] w-[800px] border-collapse">
        <thead>
          <tr>
            <th className={`${beVietnamPro.className} bg-[#C0C0C0] text-[#FFFEFB] text-center text-[20px] border border-[#FFFEFB] p-[10px]`}>
              Total de Usuarios
            </th>
            <th className={`${beVietnamPro.className} bg-[#C0C0C0] text-[#FFFEFB] text-center text-[20px] border border-[#FFFEFB] p-[10px]`}>
              Nuevos Usuarios en los Últimos 7 Días
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={`${beVietnamPro.className} bg-[#FFFEFB] text-[#004C7F] text-center border border-[#C0C0C0] p-[5px]`}>
              {totalUsuarios}
            </td>
            <td className={`${beVietnamPro.className} bg-[#FFFEFB] text-[#004C7F] text-center border border-[#C0C0C0] p-[5px]`}>
              {nuevosUsuarios}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
