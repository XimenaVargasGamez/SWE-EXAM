// Import React library and font configuration
import React from "react";
import { Be_Vietnam_Pro } from 'next/font/google';

// Configure font for table styling
const beVietnamPro = Be_Vietnam_Pro({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

// Define props interface for component
interface AnalyticsTableProps {
  totalUsuarios: number | string;
  nuevosUsuarios: number | string;
}

// Analytics table component to display user statistics
export default function AnalyticsTable({ totalUsuarios, nuevosUsuarios }: AnalyticsTableProps) {
  return (
    // Main container with centered layout
    <div className="max-w-[1500px] mx-auto items-center">
      {/* Table with fixed width and centered positioning */}
      <table className="ml-[300px] w-[800px] border-collapse">
        {/* Table header section */}
        <thead>
          <tr>
            {/* Header cell for total users */}
            <th className={`${beVietnamPro.className} bg-[#C0C0C0] text-[#FFFEFB] text-center text-[20px] border border-[#FFFEFB] p-[10px]`}>
              Total de Usuarios
            </th>
            {/* Header cell for new users */}
            <th className={`${beVietnamPro.className} bg-[#C0C0C0] text-[#FFFEFB] text-center text-[20px] border border-[#FFFEFB] p-[10px]`}>
              Nuevos Usuarios en los Últimos 7 Días
            </th>
          </tr>
        </thead>
        {/* Table body section with data */}
        <tbody>
          <tr>
            {/* Data cell displaying total users count */}
            <td className={`${beVietnamPro.className} bg-[#FFFEFB] text-[#004C7F] text-center border border-[#C0C0C0] p-[5px]`}>
              {totalUsuarios}
            </td>
            {/* Data cell displaying new users count */}
            <td className={`${beVietnamPro.className} bg-[#FFFEFB] text-[#004C7F] text-center border border-[#C0C0C0] p-[5px]`}>
              {nuevosUsuarios}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}