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

          <div className={`${beVietnamPro.className} ml-[100px] text-[#00092E] space-y-2 ml-[24px]`}>
            <Link
              href="https://docs.google.com/document/d/1iGzutWpJWT2bUsWhx2ZEjZi6Y15KJhYexpIOKb4CrLs/edit?usp=sharing"
              className="mb-[10px] block text-[#00092E] hover:text-[#0064A7] no-underline"
            >
              Link a mi CV
            </Link>

            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-4 text-[#00092E] hover:text-[#0064A7] no-underline"
            >
              <Image
                src="/LinkedInIcons.png"
                alt="LinkedIn Icon"
                style={{ paddingBottom: '5px', paddingRight: '5px' }}
                width={20}
                height={20}
                className="inline-block group-hover:brightness-75"
              />
              <span className={`${beVietnamPro.className} mt-[10px] mb-[20px]`}>
                ¡Conecta Conmigo en LinkedIn!
              </span>
            </Link>
          </div>
        </div>

        <div className="text-[#00092E] mt-5 text-center pt-5 border-t items-center ">
          <p className={`${beVietnamPro.className} text-sm`}>
            Examen LKMX Agosto 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
