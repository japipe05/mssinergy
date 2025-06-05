"use client";

import {
  Alert,
  Label,
  TextInput,
  Select,
  Textarea,
  Button,
} from "flowbite-react";
import React, { useState, ChangeEvent } from "react";
import TitleCard from "@/app/components/shared/TitleBorderCard";
import { HiInformationCircle, HiCheckCircle, HiExclamationCircle } from "react-icons/hi";
import emailjs from "@emailjs/browser";
import { time } from "console";
import { useTranslation } from "react-i18next";
import "@/utils/i18n";
import { ca } from "date-fns/locale";
import ThemeBreadcrumb from "@/app/components/landingpage/layout/shared/breadcrumb/ThemeBreadcrumb";
const PQRS = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    from_name: "",
    area: "",
    solicitud: "",
    motivo: "",
    descripcion: "",
    tipoDocumento: "",
    numeroDocumento: "",
    nombre: "",
    cargo: "",
    empresa: "",
    correo:"",
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
      from_name: "PQRS desde la web",
      nombre_var: "PQRS desde la web 15 días hábiles para la respuesta: "+formData.correo,
      area: "🔹 Área: "+formData.area,
      solicitud: "📌 Tipo de solicitud: "+formData.solicitud,
      motivo: "❓ Motivo: "+formData.motivo,
      descripcion: "📝 Descripción de la solicitud: "+formData.descripcion,
      nombre: "👤 Nombre: "+formData.nombre,
      tipoDocumento: "🆔 Tipo de Documento: "+formData.tipoDocumento,
      numeroDocumento: "📄 Número de Documento: "+formData.numeroDocumento,
      cargo: "💼 Cargo: "+formData.cargo,
      empresa: "🏢 Empresa: "+formData.empresa,
      reply_to: formData.correo,
      to_email: toEmail,
    };


    try {
      await emailjs.send(serviceId, templateId, templateParams, userId);
      setAlert({ type: "success", message: "Correo enviado correctamente" });
      setFormData({
        from_name: "",
        area: "",
        solicitud: "",
        motivo: "",
        descripcion: "",
        tipoDocumento: "",
        numeroDocumento: "",
        nombre: "",
        cargo: "",
        empresa: "",
        correo:"",
      });
    } catch (error) {
      setAlert({ type: "error", message: "Hubo un error al enviar el correo" });
    } finally {
      setLoading(false);
      setTimeout(() => setAlert(null), 4000);
    }
  };

  return (
    <section className="min-h-screen py-12 px-4 bg-white dark:bg-black text-gray-800 dark:text-white">
      <div className="max-w-4xl mx-auto">
        
        
          <ThemeBreadcrumb title={t("PQR")} />
          <div className="pb-6 space-y-4">
            <Alert color="lightprimary" icon={HiInformationCircle}>
              <span className="font-medium text-base">{t("Información PQR")}</span>
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

          <form onSubmit={handleSubmit} className="grid grid-cols-12 gap-6">
            {/* Campos */}
            {[
              {
                id: "area",
                label: t("Área"),
                type: "select",
                options: ["Laboratorio de Calibraciones", "Laboratorio de Ensayos", "Laboratorio de temperatura y humedad relativa"],
              },
              {
                id: "solicitud",
                label: t("Solicitud"),
                type: "select",
                options: ["Petición", "Queja", "Reclamo"],
              },
              { id: "motivo", label: t("Motivo"), type: "text" },
              { id: "descripcion", label: t("Descripción de la solicitud"), type: "textarea" },
              {
                id: "tipoDocumento",
                label: t("Tipo de documento"),
                type: "select",
                options: ["Cédula de ciudadanía", "Cédula de extranjería", "NIT", "Pasaporte"],
              },
              { id: "numeroDocumento", label: t("Número de documento"), type: "number" },
              { id: "nombre", label: t("Nombre"), type: "text" },
              { id: "cargo", label: t("Cargo"), type: "text" },
              { id: "empresa", label: t("Empresa"), type: "text" },
              { id: "correo", label: t("Correo electrónico"), type: "mail" },
            ].map(({ id, label, type, options }) => (
              <div
                key={id}
                className={`${["descripcion"].includes(id) || ["motivo"].includes(id) ? "col-span-12" : "sm:col-span-6 col-span-12"}`}
              >
                <Label htmlFor={id} value={label} className="text-base font-medium dark:text-white" />
                {type === "select" ? (
                  <Select
                    id={id}
                    name={id}
                    required
                    value={(formData as any)[id]}
                    onChange={handleChange}
                    className="mt-1"
                  >
                    <option value="" disabled>Seleccione una opción</option>
                    {options!.map((opt) => (
                      <option key={opt}>{opt}</option>
                    ))}
                  </Select>
                ) : type === "textarea" ? (
                  <Textarea
                    id={id}
                    name={id}
                    rows={4}
                    required
                    value={(formData as any)[id]}
                    onChange={handleChange}
                    className="mt-1"
                  />
                ) : (
                  <TextInput
                    id={id}
                    name={id}
                    type="text"
                    required
                    value={(formData as any)[id]}
                    onChange={handleChange}
                    className="mt-1"
                  />
                )}
              </div>
            ))}

            <div className="col-span-12">
              <Button
                type="submit"
                disabled={loading}
                className="rounded-md bg-primary hover:bg-primaryemphasis text-white w-full py-2 transition"
              >
                {loading ? t('Cargando...') : t('Enviar')}
              </Button>
            </div>
          </form>
        
      </div>
    </section>
  );
};

export default PQRS;
