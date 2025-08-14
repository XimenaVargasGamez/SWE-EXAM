import Image from 'next/image';
import Link from 'next/link';
import { Be_Vietnam_Pro, Anton } from 'next/font/google';

const beVietnamPro = Be_Vietnam_Pro({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
});

const Footer = () => {
  return (
    <footer className="bg-[#FFFEFB] border-t py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-[8px]">
          <h3
            className={`${anton.className} text-[30px] text-[#00092E] ml-[100px] mb-[20px] mt-[30px] uppercase tracking-wide`}
          >
            Información Adicional
          </h3>
          <div className={`${beVietnamPro.className} ml-[100px] text-[#00092E] space-y-2 ml-24`}>
            <Link
              href="https://docs.google.com/document/d/1iGzutWpJWT2bUsWhx2ZEjZi6Y15KJhYexpIOKb4CrLs/edit?usp=sharing"
              className="mb-[10px] block text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              Link a mi CV
            </Link>

            <div className="flex items-center space-x-4">
              <span className={`${beVietnamPro.className} text-[#00092E] mt-[10px] mb-[20px]`}>
                ¡Conecta Conmigo en LinkedIn!
              </span>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:opacity-80 transition-opacity duration-200"
              >
                <Image
                  src="/LinkedInIcons.png"
                  alt="LinkedIn Icon"
                  width={20}
                  height={20}
                  className="inline-block"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="text-[#00092E] mt-5 text-center pt-5 border-t">
          <p className={`${beVietnamPro.className} text-sm`}>
            Examen LKMX Agosto 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
