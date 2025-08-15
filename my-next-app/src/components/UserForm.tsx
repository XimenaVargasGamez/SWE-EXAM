'use client';

import { useState, FormEvent } from 'react';
import { UserService } from '@/services/userService';
import { CreateUserRequest } from '@/types/user';
import { Be_Vietnam_Pro, Anton } from 'next/font/google';

const beVietnamPro = Be_Vietnam_Pro({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
});
interface UserFormProps {
  onSubmit: (username: string, email: string) => void;
}

export default function UserForm({ onSubmit }: UserFormProps) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const trimmedUsername = username.trim();
    const trimmedEmail = email.trim();
    
    if (!trimmedUsername || !trimmedEmail) {
      setError('Por favor complete todos los campos');
      return;
    }

    setIsLoading(true);

    try {
      const result = await UserService.createUser({
        username: trimmedUsername,
        email: trimmedEmail
      });

      if (result.success && result.user) {
        setSuccess(`¡Usuario ${trimmedUsername} registrado exitosamente!`);
        onSubmit(trimmedUsername, trimmedEmail);
        setUsername('');
        setEmail('');
        
        setTimeout(() => setSuccess(null), 3000);
      } else {
        setError(result.error || 'Error al registrar usuario');
      }
    } catch (err) {
      setError('Error de conexión. Por favor intente nuevamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="text-[#FFFEFB] shadow-lg mt-[-50px] max-w-[500px] w-full">
      <form onSubmit={handleSubmit} className="space-y-[30px]">
        {/* error */}
        {error && (
          <div className="text-[#FFFEFB] text-[15px] rounded-[10px]">
            <p className={`${anton.className} text-[#FFFEFB] text-[15px] text-center`}>
              {error}
            </p>
          </div>
        )}
        {/* success */}
        {true && (
          <div className="text-[#FFFEFB] text-[15px] rounded-[10px]">
            <p className={`${anton.className} text-[#FFFEFB] text-[15px] text-center`}>
              {success}
            </p>
          </div>
        )}
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
            disabled={isLoading}
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
            disabled={isLoading}
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            disabled={isLoading}
            className={`${beVietnamPro.className} text-[20px] text-[#0071BD] bg-[#FDFBFF] border-none px-[70px] py-[15px] ml-[10px] rounded-[13px] shadow-[500px] transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none`}
          >
            {isLoading ? 'Registrando...' : '¡Registrar!'}
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
