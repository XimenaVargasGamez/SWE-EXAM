'use client';

import { useState, FormEvent } from 'react';
import { Be_Vietnam_Pro } from 'next/font/google';

const beVietnamPro = Be_Vietnam_Pro({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

interface UserFormProps {
  onSubmit: (username: string, email: string) => void;
}

export default function UserForm({ onSubmit }: UserFormProps) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const trimmedUsername = username.trim();
    const trimmedEmail = email.trim();
    if (!trimmedUsername || !trimmedEmail) return;

    onSubmit(trimmedUsername, trimmedEmail);
    setUsername('');
    setEmail('');
  };

  return (
    <div className="bg-white rounded-[13px] shadow-lg p-[40px] max-w-[500px] w-full">
      <form onSubmit={handleSubmit} className="space-y-[30px]">
        <div>
          <label
            htmlFor="username"
            className={`${beVietnamPro.className} block text-[#FFFEFB] text-[20px] mb-[15px]`}
          >
            Usuario*
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-[20px] py-[15px] border border-[#00092E] rounded-[15px] text-[15px] focus:outline-none focus:ring-2 focus:ring-[#00092E] focus:border-transparent"
            placeholder="Ingrese nombre de usuario"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className={`${beVietnamPro.className} block text-[#FFFEFB] text-[20px] mb-[15px]`}
          >
            Correo Electrónico*
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-[20px] py-[15px] border border-[#00092E] rounded-[15px] text-[15px] focus:outline-none focus:ring-2 focus:ring-[#00092E] focus:border-transparent"
            placeholder="Ingrese correo electrónico"
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className={`${beVietnamPro.className} text-[20px] text-[#0071BD] bg-[#FDFBFF] border-none px-[70px] py-[15px] ml-[10px] rounded-[13px] shadow-[500px] transition-transform duration-200 hover:scale-105`}
          >
            ¡Registrar!
          </button>
        </div>
        <div className="text-center">
          <p className={`${beVietnamPro.className} text-[#FFFEFB] text-[15px]`}>
            * Campo obligatorio
          </p>
        </div>
      </form>
    </div>
  );
}
