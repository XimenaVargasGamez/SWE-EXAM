// Import necessary components and fonts
import Image from 'next/image';
import Link from 'next/link';
import { Be_Vietnam_Pro, Anton } from 'next/font/google';

// Configure primary font for body text
const beVietnamPro = Be_Vietnam_Pro({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

// Configure display font for headings
const anton = Anton({
  weight: '400',
  subsets: ['latin'],
});

// Footer component for page bottom section
const Footer = () => {
  return (
    // Footer container with background styling
    <footer className="bg-[#FFFEFB] border-t py-8 px-6">
      {/* Main footer content wrapper */}
      <div className="max-w-7xl mx-auto">
        {/* Additional information section */}
        <div className="mb-[8px]">
          {/* Section title */}
          <h3
            className={`${anton.className} text-[30px] text-[#00092E] ml-[100px] mb-[20px] mt-[30px] uppercase tracking-wide`}
          >
            Información Adicional
          </h3>

          {/* Links container */}
          <div className={`${beVietnamPro.className} ml-[100px] text-[#00092E] space-y-2 ml-[24px]`}>
            {/* CV document link */}
            <Link
              href="https://docs.google.com/document/d/1iGzutWpJWT2bUsWhx2ZEjZi6Y15KJhYexpIOKb4CrLs/edit?usp=sharing"
              className="mb-[10px] block text-[#00092E] hover:text-[#0064A7] no-underline"
            >
              Link a mi CV
            </Link>

            {/* LinkedIn profile link with icon */}
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-4 text-[#00092E] hover:text-[#0064A7] no-underline"
            >
              {/* LinkedIn icon image */}
              <Image
                src="/LinkedInIcons.png"
                alt="LinkedIn Icon"
                style={{ paddingBottom: '5px', paddingRight: '5px' }}
                width={20}
                height={20}
                className="inline-block group-hover:brightness-75"
              />
              {/* LinkedIn link text */}
              <span className={`${beVietnamPro.className} mt-[10px] mb-[20px]`}>
                ¡Conecta Conmigo en LinkedIn!
              </span>
            </Link>
          </div>
        </div>

        {/* Footer bottom section with copyright */}
        <div className="text-[#00092E] mt-5 text-center pt-5 border-t items-center ">
          {/* Copyright/exam information */}
          <p className={`${beVietnamPro.className} text-sm`}>
            Examen LKMX Agosto 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;