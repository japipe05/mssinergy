"use client";

import {
  Alert,
  Label,
  TextInput,
  Button,
} from "flowbite-react";
import React, { useState, ChangeEvent } from "react";
import TitleCard from "../../../components/shared/TitleBorderCard";
import { HiInformationCircle, HiCheckCircle, HiExclamationCircle } from "react-icons/hi";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import "@/utils/i18n";

const Cotizacion = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    from_name: "",
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    pais: "",
    servicio: "",
    empresa: "",
    cargo: "",
    industria: "",
  });

  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID!;
    const toEmail = process.env.NEXT_PUBLIC_EMAILJS_TO_EMAIL!;

    const templateParams = {
      from_name: "Cotización desde la web",
      nombre_var :  `${formData.nombre} ${formData.apellido}`,
      area: "👤 Nombre: " +formData.nombre,
      solicitud: "👤 Apellido: "  + formData.apellido,
      motivo: "📧 Email: "+formData.email,
      descripcion: "📞 Telefono: "+formData.telefono,
      nombre: "🌍 Pais: "+formData.pais,
      empresa: "💼 Empresa: "+formData.empresa,
      tipoDocumento: "🔧 Servicio: "+formData.servicio,
      cargo: "📝 Cargo: "+formData.cargo,
      numeroDocumento: "🏢 Industria:"+formData.industria,
      reply_to: formData.email,
      to_email: toEmail,
    };


  
 
    try {
      await emailjs.send(serviceId, templateId, templateParams, userId);
      setAlert({ type: "success", message: t("Correo enviado correctamente") });
      setFormData({
        from_name: "",
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        pais: "",
        servicio: "",
        empresa: "",
        cargo: "",
        industria: "",
      });
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      setAlert({ type: "error", message: t("Hubo un error al enviar el correo") });
    } finally {
      setLoading(false);
      setTimeout(() => setAlert(null), 4000);
    }
  };

  return (
    <section className="min-h-screen py-12 px-4 dark:bg-dark">
      <div className="max-w-4xl mx-auto">
      <TitleCard title={t("Cotización")}>
        <div className="pb-6 space-y-4">
          <Alert color="lightprimary" icon={HiInformationCircle}>
            <span className="font-medium text-base">{t("Información Cotización")}</span>
          </Alert>

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

        <form onSubmit={handleSubmit} className="grid grid-cols-12 gap-6 text-base font-medium">
          {[
            { id: "nombre", label: t("Nombre") },
            { id: "apellido", label: t("Apellido") },
            { id: "email", label: t("Email") },
            { id: "telefono", label: t("Teléfono") },
            { id: "pais", label: t("País") },
            { id: "servicio", label: t("Servicio a solicitar") },
            { id: "empresa", label: t("Empresa") },
            { id: "cargo", label: t("Cargo") },
            { id: "industria", label: t("Industria") },
          ].map((field) => (
            <div key={field.id} className="sm:col-span-6 col-span-12">
              <Label htmlFor={field.id} value={field.label} className="text-base font-medium dark:text-white mb-1 block" />
              <TextInput
                id={field.id}
                name={field.id}
                type="text"
                sizing="md"
                className="text-black dark:text-white"
                value={formData[field.id as keyof typeof formData]}
                onChange={handleChange}
                required
              />
            </div>
          ))}

          <div className="col-span-12">
            <Button
              type="submit"
              disabled={loading}
              className="rounded-md bg-primary hover:bg-primaryemphasis text-white w-full py-2 transition"
            >
              {loading ? t("Enviando...") : t("Enviar")}
            </Button>
          </div>
        </form>
      </TitleCard>
      </div>
    </section>
  );
};

export default Cotizacion;
