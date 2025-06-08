"use client";
import { Button, Label, TextInput } from "flowbite-react";
import React, { useState, useRef } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import { useTranslation } from "react-i18next";
import "@/utils/i18n";

const AuthForgotPassword = () => {
  
  const { t } = useTranslation();

  const [email, setEmail] = useState('');
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage({ text: t("El correo es obligatorio"), type: "error" });
      return;
    }

    if (!captchaToken) {
      setMessage({ text: t("Por favor, completa el CAPTCHA para continuar."), type: "error" });
      return;
    }

    try {
      await axios.post('/api/auth/forgot-password', {
        email,
        captchaToken
      });

      setMessage({ text: t("Revisa tu correo para continuar el cambio de contraseña."), type: "success" });
      recaptchaRef.current?.reset();
      setCaptchaToken(null);
    } catch (err) {
      setMessage({ text: t("Error al enviar correo. Verifica tu email."), type: "error" });
    }
  };

  const onCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
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

      <div className="mb-6 flex justify-center">
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
          onChange={onCaptchaChange}
          ref={recaptchaRef}
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
        <p className={`mt-4 text-center text-sm ${message.type === "success" ? "text-green-500" : "text-red-500"}`}>
          {message.text}
        </p>
      )}
    </form>
  );
};

export default AuthForgotPassword;
