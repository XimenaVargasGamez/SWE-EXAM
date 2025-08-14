import Image from 'next/image';
import Link from 'next/link';
import { Be_Vietnam_Pro, Anton } from 'next/font/google'

const beVietnamPro = Be_Vietnam_Pro({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})

const navItems = [
  { label: "Usuarios", href: "/users" },
  { label: "Salud", href: "/health" },
  { label: "Analíticas", href: "/analytics" },
];

const NavBar = () => {
    return (
      <nav className={`${beVietnamPro.className} bg-[#FFFEFB] border-b border-gray-200 px-6 py-4`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/view" className="flex items-center hover:opacity-80 transition-opacity duration-200">
            <Image
              src="/Logo.png"
              style={{padding: '15px'}}
              width={110}
              height={45}
              className="mr-3"
              alt="Logo"
            />
            <span className="text-2xl font-bold text-gray-900"></span>
          </Link>
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    );
  };
  
  export default NavBar;