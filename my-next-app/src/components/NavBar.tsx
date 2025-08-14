'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Be_Vietnam_Pro } from 'next/font/google';

const beVietnamPro = Be_Vietnam_Pro({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

const navItems = [
  { label: "Usuarios", href: "/usuarios" },
  { label: "Salud", href: "/salud" },
  { label: "Analíticas", href: "/analiticas" },
];

const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav className={`${beVietnamPro.className} bg-[#FFFEFB] px-[6px] py-[4px] shadow-lg`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/Logo.png"
            style={{ padding: '15px' }}
            width={110}
            height={45}
            alt="Logo"
          />
        </Link>

      <div className="flex flex-row space-x-6">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`px-[15px] py-[2px] mr-[10px] font-medium transition-all duration-200 text-center no-underline
                ${isActive
                  ? 'border-b-2 border-[#00092E] text-[#00092E]'
                  : 'text-[#00092E] hover:text-[#0490E0] rounded-md'}
              `}
            >
              {item.label}
            </Link>
          );
        })}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
