'use client';
import { Button, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import "@/utils/i18n";

const AuthForgotPassword = () => {
  const { t } = useTranslation();

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage({ text: t("El correo es obligatorio"), type: "error" });
      return;
    }

    try {
      await axios.post('/api/auth/forgot-password', { email });
      setMessage({ text: t("Revisa tu correo para continuar el cambio de contraseña."), type: "success" });
    } catch (err) {
      setMessage({ text: t("Error al enviar correo. Verifica tu email."), type: "error" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <div className="mb-4">
        <Label htmlFor="emadd" value={t("Correo electrónico")} />
        <TextInput
          id="emadd"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sizing="md"
          required
        />
      </div>

      <Button
        type="submit"
        color="primary"
        className="rounded-full bg-primary text-white hover:bg-primaryemphasis w-full"
      >
        {t("Recuperar contraseña")}
      </Button>

      {message && (
        <p
          className={`mt-4 text-center text-sm ${
            message.type === "success" ? "text-green-500" : "text-red-500"
          }`}
        >
          {message.text}
        </p>
      )}
    </form>
  );
};

export default AuthForgotPassword;
