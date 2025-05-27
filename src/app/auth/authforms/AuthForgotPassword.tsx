'use client';
import { Button, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import axios from "axios";

const AuthForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/forgot-password', { email });
      setMessage("📧 Revisa tu correo para continuar el cambio de contraseña.");
    } catch (err) {
      setMessage("❌ Error al enviar correo. Verifica tu email.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <div className="mb-4">
        <Label htmlFor="emadd" value="Correo electrónico" />
        <TextInput
          id="emadd"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sizing="md"
        />
      </div>
      <Button
        type="submit"
        color="primary"
        className="rounded-full bg-primary text-white hover:bg-primaryemphasis w-full"
      >
        Recuperar contraseña
      </Button>
      {message && <p className="mt-4 text-center text-sm text-gray-700">{message}</p>}
    </form>
  );
};

export default AuthForgotPassword;
