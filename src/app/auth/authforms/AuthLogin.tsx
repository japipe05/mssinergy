'use client';
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

const AuthLogin = () => {
  const [loading, setLoading] = useState(false);
  const [usr_correo, setusr_correo] = useState('');
  const [usr_credencial, setusr_credencial] = useState('');
  const [rememberUser, setRememberUser] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);
  const router = useRouter();

  // Cargar usuario guardado si existe
  useEffect(() => {
    const savedEmail = localStorage.getItem('rememberedUser');
    if (savedEmail) {
      setusr_correo(savedEmail);
      setRememberUser(true);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('/api/auth/login', { usr_correo, usr_credencial });
      
setMessage({ text: 'Login exitoso', type: 'success' });
      // Guardar correo si checkbox está marcado
      if (rememberUser) {
        localStorage.setItem('rememberedUser', usr_correo);
      } else {
        localStorage.removeItem('rememberedUser');
      }

      router.push('/ModulosMssinergy');
    } catch (err: unknown) {
      setLoading(false);
      if (err instanceof AxiosError) {
        setMessage({ text: err.response?.data?.error || 'Error desconocido', type: 'error' });
      } else {
        setMessage({ text: 'Error inesperado', type: 'error' });
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mt-6">
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="usr_correo" value="Correo" />
          </div>
          <TextInput
            id="usr_correo"
            type="email"
            value={usr_correo}
            onChange={(e) => setusr_correo(e.target.value)}
            sizing="md"
            className="form-control"
          />
        </div>
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="usr_credencial" value="Contraseña" />
          </div>
          <TextInput
            id="usr_credencial"
            type="password"
            value={usr_credencial}
            onChange={(e) => setusr_credencial(e.target.value)}
            sizing="md"
            className="form-control"
          />
        </div>
        {message && (
          <p
            className={`mt-2 text-center ${message.type === 'success' ? 'text-green-500' : 'text-red-500'
              }`}
          >
            {message.text}
          </p>
        )}

        <div className="flex justify-between my-5">
          <div className="flex items-center gap-2">
            <Checkbox
              id="remember"
              checked={rememberUser}
              onChange={() => setRememberUser(!rememberUser)}
            />
            <Label htmlFor="remember" className="font-normal cursor-pointer">
              Recordar usuario
            </Label>
          </div>
          <Link href={"/auth/auth1/forgot-password"} className="text-primary text-sm font-medium">
            Alvide la Contraseña ?
          </Link>
        </div>

        <button
          type="submit"
          className="rounded-md bg-primary text-white hover:bg-primaryemphasis w-full py-2"
          disabled={loading}
        >
          {loading ? 'Cargando...' : 'Iniciar Sesión'}
        </button>
      </form>
    </>
  );
};

export default AuthLogin;
