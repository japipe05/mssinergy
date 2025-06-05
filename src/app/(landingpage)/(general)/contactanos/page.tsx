"use client";

import {
  Alert,
  Label,
  TextInput,
  Textarea,
  Button,
} from "flowbite-react";
import React, { useState, ChangeEvent } from "react";
import TitleCard from "@/app/components/shared/TitleBorderCard";
import { HiInformationCircle, HiCheckCircle, HiExclamationCircle } from "react-icons/hi";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import "@/utils/i18n";
import ThemeBreadcrumb from "@/app/components/landingpage/layout/shared/breadcrumb/ThemeBreadcrumb";

const Contactanos = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    titulo: "",
    mail: "",
    descripcion: "",
  });
  const [alert, setAlert] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const seg = 'src\\app\\landingpage\\general\\contactanos\\page.tsx';
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID!;
    const toEmail = process.env.NEXT_PUBLIC_EMAILJS_TO_EMAIL!;

    const templateParams = {
      from_name: "Contactanos desde la web",
      nombre_var: "Contactanos desde la web",
      area: "🔹 Título: "+formData.titulo,
      solicitud: "📌 Correo electrónico: "+formData.mail,
      motivo: "📝 Descripción de la solicitud: "+formData.descripcion,
      reply_to: formData.mail,
      to_email: toEmail,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, userId);
      setAlert({ type: "success", message: t("Correo enviado correctamente") });
      setFormData({ titulo: "", mail: "", descripcion: "" });
    } catch (error) {
      setAlert({ type: "error", message: t("Hubo un error al enviar el correo") });
    } finally {
      setLoading(false);
      setTimeout(() => setAlert(null), 4000); // Oculta la alerta después de 4 segundos
    }
  };

  return (
    <section className="min-h-screen py-12 px-4 dark:bg-black text-body dark:text-white">
      <div className="max-w-4xl mx-auto">
        <ThemeBreadcrumb title={t("Contáctanos")} />
       
          <div className="pb-6 space-y-4">
            <Alert color="lightprimary" icon={HiInformationCircle}>
              <span className="font-medium text-base">{t("Información de contacto")}</span>
            </Alert>

            {/* ✅ Alerta bonita */}
            {alert && (
              <Alert
                color={alert.type === "success" ? "success" : "failure"}
                icon={alert.type === "success" ? HiCheckCircle : HiExclamationCircle}
                className="rounded-md"
              >
                <span className="text-sm font-medium">{alert.message}</span>
              </Alert>
            )}
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-12 gap-6">
            <div className="sm:col-span-6 col-span-12">
              <Label htmlFor="titulo" value={t("Título")} className="text-base font-medium dark:text-white" />
              <TextInput
                id="titulo"
                name="titulo"
                type="text"
                value={formData.titulo}
                onChange={handleChange}
                required
                className="mt-1"
              />
            </div>

            <div className="sm:col-span-6 col-span-12">
              <Label htmlFor="mail" value={t("Correo electrónico")} className="text-base font-medium dark:text-white" />
              <TextInput
                id="mail"
                name="mail"
                type="email"
                value={formData.mail}
                onChange={handleChange}
                required
                className="mt-1"
              />
            </div>

            <div className="col-span-12">
              <Label htmlFor="descripcion" value={t("Descripción de la solicitud")} className="text-base font-medium dark:text-white" />
              <Textarea
                id="descripcion"
                name="descripcion"
                rows={4}
                value={formData.descripcion}
                onChange={handleChange}
                required
                className="mt-1"
              />
            </div>

            <div className="col-span-12 flex items-center gap-4">
              <Button type="submit"
                className="rounded-md bg-primary text-white hover:bg-primaryemphasis w-full py-2"
                disabled={loading}>
                {loading ? t('Cargando...') : t('Enviar')}
              </Button>
            </div>
          </form>
   
      </div>
    </section>
  );
};

export default Contactanos;
