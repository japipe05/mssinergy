"use client";

import { Checkbox, Label, TextInput } from "flowbite-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import "@/utils/i18n";

const AuthLogin = () => {
  const { t } = useTranslation();

  const [loading, setLoading] = useState(false);
  const [usr_correo, setusr_correo] = useState("");
  const [usr_credencial, setusr_credencial] = useState("");
  const [rememberUser, setRememberUser] = useState(false);
  const [message, setMessage] = useState<{
    text: string;
    type: "success" | "error";
  } | null>(null);

  const router = useRouter();

  useEffect(() => {
    const savedEmail = localStorage.getItem("rememberedUser");
    if (savedEmail) {
      setusr_correo(savedEmail);
      setRememberUser(true);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validación de campos
    if (!usr_correo.trim() || !usr_credencial.trim()) {
      setMessage({
        text: t("Todos los campos son obligatorios"),
        type: "error",
      });
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      await axios.post("/api/auth/login", { usr_correo, usr_credencial });

      setMessage({ text: t("Login exitoso"), type: "success" });

      if (rememberUser) {
        localStorage.setItem("rememberedUser", usr_correo);
      } else {
        localStorage.removeItem("rememberedUser");
      }

      router.push("/ModulosMssinergy");
    } catch (err: unknown) {
      setLoading(false);
      if (err instanceof AxiosError) {
        setMessage({
          text: err.response?.data?.error || t("Error desconocido"),
          type: "error",
        });
      } else {
        setMessage({ text: t("Error inesperado"), type: "error" });
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mt-6">
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="usr_correo" value={t("Correo electrónico")} />
          </div>
          <TextInput
            id="usr_correo"
            type="email"
            value={usr_correo}
            onChange={(e) => setusr_correo(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="usr_credencial" value={t("Contraseña")} />
          </div>
          <TextInput
            id="usr_credencial"
            type="password"
            value={usr_credencial}
            onChange={(e) => setusr_credencial(e.target.value)}
            required
          />
        </div>

        {message && (
          <p
            className={`mt-2 text-center ${
              message.type === "success" ? "text-green-500" : "text-red-500"
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
              {t("Recordar usuario")}
            </Label>
          </div>
          <Link
            href={"/auth/auth2/forgot-password"}
            className="text-primary text-sm font-medium"
          >
            {t("Olvidé la Contraseña")}
          </Link>
        </div>

        <button
          type="submit"
          className="rounded-md bg-primary text-white hover:bg-primaryemphasis w-full py-2"
          disabled={loading}
        >
          {loading ? t("Cargando...") : t("Iniciar Sesión")}
        </button>
      </form>
    </>
  );
};

export default AuthLogin;
