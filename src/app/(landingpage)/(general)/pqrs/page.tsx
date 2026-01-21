"use client";

import {
  Alert,
  Label,
  TextInput,
  Select,
  Textarea,
  Button,
} from "flowbite-react";
import React, { useState, ChangeEvent, useRef } from "react";
import TitleCard from "@/app/components/shared/TitleBorderCard";
import { HiInformationCircle, HiCheckCircle, HiExclamationCircle } from "react-icons/hi";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import ReCAPTCHA from "react-google-recaptcha";
import "@/utils/i18n";
import ThemeBreadcrumb from "@/app/components/landingpage/layout/shared/breadcrumb/ThemeBreadcrumb";

const PQRS = () => {
  const { t } = useTranslation();
  const recaptchaRef = useRef<ReCAPTCHA | null>(null);

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
    correo: "",
  });

  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!captchaToken) {
      setAlert({ type: "error", message: t("Por favor completa el CAPTCHA") });
      return;
    }

    setLoading(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID!;
    const toEmail = process.env.NEXT_PUBLIC_EMAILJS_TO_EMAIL!;

    const templateParams = {
      from_name: "PQRS desde la web",
      nombre_var: "PQRS desde la web 15 días hábiles para la respuesta: " + formData.correo,
      area: "🔹 Área: " + formData.area,
      solicitud: "📌 Tipo de solicitud: " + formData.solicitud,
      motivo: "❓ Motivo: " + formData.motivo,
      descripcion: "📝 Descripción de la solicitud: " + formData.descripcion,
      nombre: "👤 Nombre: " + formData.nombre,
      tipoDocumento: "🆔 Tipo de Documento: " + formData.tipoDocumento,
      numeroDocumento: "📄 Número de Documento: " + formData.numeroDocumento,
      cargo: "💼 Cargo: " + formData.cargo,
      empresa: "🏢 Empresa: " + formData.empresa,
      reply_to: formData.correo,
      to_email: toEmail,
      captcha: captchaToken,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, userId);
      setAlert({ type: "success", message: t("Correo enviado correctamente") });
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
        correo: "",
      });
      recaptchaRef.current?.reset();
      setCaptchaToken(null);
    } catch (error) {
      setAlert({ type: "error", message: t("Hubo un error al enviar el correo") });
      recaptchaRef.current?.reset();
      setCaptchaToken(null);
    } finally {
      setLoading(false);
      setTimeout(() => setAlert(null), 4000);
    }
  };

  return (
    <section className="min-h-screen py-12 px-4 dark:bg-dark">
      <div className="max-w-4xl mx-auto">
        <ThemeBreadcrumb title={t("PQR")} />

        <TitleCard title={t("PQR")}>
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

          <form onSubmit={handleSubmit} className="grid grid-cols-12 gap-6 text-base font-medium">
            {[
              {
                id: "area",
                label: t("Área"),
                type: "select",
                options: [
                  t("Laboratorio de Calibraciones"),
                  t("Laboratorio de Ensayos"),
                  t("Laboratorio de temperatura y humedad relativa"),
                ],
              },
              {
                id: "solicitud",
                label: t("Solicitud"),
                type: "select",
                options: [t("Petición"), t("Queja"), t("Reclamo")],
              },
              { id: "motivo", label: t("Motivo"), type: "text" },
              { id: "descripcion", label: t("Descripción de la solicitud"), type: "textarea" },
              {
                id: "tipoDocumento",
                label: t("Tipo de documento"),
                type: "select",
                options: [
                  t("Cédula de ciudadanía"),
                  t("Cédula de extranjería"),
                  t("NIT"),
                  t("Pasaporte"),
                ],
              },
              { id: "numeroDocumento", label: t("Número de documento"), type: "text" },
              { id: "nombre", label: t("Nombre"), type: "text" },
              { id: "cargo", label: t("Cargo"), type: "text" },
              { id: "empresa", label: t("Empresa"), type: "text" },
              { id: "correo", label: t("Correo electrónico"), type: "mail" },
            ].map(({ id, label, type, options }) => (
              <div
                key={id}
                className={`${["descripcion", "motivo"].includes(id)
                  ? "col-span-12"
                  : "sm:col-span-6 col-span-12"}`}
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
                    <option value="" disabled>
                      {t("Seleccione una opción")}
                    </option>
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
                    type={type === "mail" ? "email" : "text"}
                    required
                    value={(formData as any)[id]}
                    onChange={handleChange}
                    className="mt-1"
                  />
                )}
              </div>
            ))}

            <div className="col-span-12 flex justify-center">
              {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ? (
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                  onChange={setCaptchaToken}
                />
              ) : (
                <p className="text-red-500 text-sm text-center">
                  ⚠️ reCAPTCHA sitekey no definido (.env.local)
                </p>
              )}
            </div>

            <div className="col-span-12">
              <Button
                type="submit"
                disabled={loading}
                className="rounded-md bg-primary hover:bg-primaryemphasis text-white w-full py-2 transition"
              >
                {loading ? t("Cargando...") : t("Enviar")}
              </Button>
            </div>
          </form>
        </TitleCard>
      </div>
    </section>
  );
};

export default PQRS;