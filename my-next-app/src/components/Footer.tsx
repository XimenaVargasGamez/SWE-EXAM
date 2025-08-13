import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#FFFEFB] border-t border-gray-200 py-8 px-6 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide">
            Información Adicional
          </h3>
          <div className="space-y-2">
            <Link 
              href="/cv" 
              className="block text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              Link a mi CV
            </Link>
            <div className="flex items-center space-x-2">
              <span className="text-gray-700">¡Conecta Conmigo en LinkedIn!</span>
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

        <div className="text-center pt-6 border-t border-gray-300">
          <p className="text-gray-600 text-sm">
            Examen LKMX Agosoto 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;