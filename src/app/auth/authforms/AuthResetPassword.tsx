'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import axios from 'axios';
import { Label, TextInput, Button } from 'flowbite-react';
import { useTranslation } from 'react-i18next';
import '@/utils/i18n';

const AuthResetPassword = () => {
  const { t } = useTranslation();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const router = useRouter();

  const [password, setPassword] = useState('');
  const [message, setMessage] = useState<string | null>(null);

const handleReset = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    await axios.post('/api/auth/reset-password', { token, password });
    setMessage(t("Contraseña actualizada. Redirigiendo..."));
    setTimeout(() => router.push('/auth/auth2/login'), 3000);
  } catch (err: any) {
    const backendMessage = err?.response?.data?.error;
    setMessage(backendMessage || t("Error al actualizar contraseña."));
  }
};


  return (
    <form onSubmit={handleReset} className="mt-6">
      <Label htmlFor="password" value={t("Nueva Contraseña")} />
      <TextInput
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        sizing="md"
        minLength={5}
        maxLength={100}
        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{5,100}$"
        title={t("La contraseña debe tener al menos 5 caracteres, incluyendo mayúsculas, minúsculas y números.")}
        className="w-full text-lg"
      />
      <Button type="submit" className="mt-4 w-full bg-primary text-white">
        {t("Cambiar contraseña")}
      </Button>
      {message && <p className="mt-4 text-center text-sm">{message}</p>}
    </form>
  );
};

export default AuthResetPassword;
