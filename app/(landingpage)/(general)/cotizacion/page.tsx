"use client";
import {
  Alert,
  Label,
  TextInput,
  Button,
} from "flowbite-react";
import React, { useState, ChangeEvent } from "react";
import TitleCard from "../../../components/shared/TitleBorderCard";
import { HiInformationCircle } from "react-icons/hi";
import emailjs from "@emailjs/browser";

const cotizacion = () => {
  const [formData, setFormData] = useState({
    from_name :"",
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

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)  => {
    e.preventDefault();

    const serviceId = "service_tl7chls";
    const templateId = "template_q7qeuqr";
    const userId = "0hlLNFNigpf22GmEk";

    const templateParams = {
      from_name: `${formData.nombre} ${formData.apellido}`,
      nombre: formData.nombre,
      apellido: formData.apellido,
      email: formData.email,
      telefono: formData.telefono,
      pais: formData.pais,
      servicio: formData.servicio,
      empresa: formData.empresa,
      cargo: formData.cargo,
      industria: formData.industria,
      to_email: "felipehuchijagmail.com",
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, userId);
      alert("Correo enviado correctamente");
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
      alert("Hubo un error al enviar el correo");
    }
  };

  return (
    <div>
      <TitleCard title="Cotización">
        <div className="pb-6">
          <Alert color="lightprimary" icon={HiInformationCircle}>
            <span className="font-medium">Información Cotización</span>
          </Alert>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-12 gap-6">
          {[
            { id: "nombre", label: "Nombre" },
            { id: "apellido", label: "Apellido" },
            { id: "email", label: "Email" },
            { id: "telefono", label: "Teléfono" },
            { id: "pais", label: "País" },
            { id: "servicio", label: "Servicio a solicitar" },
            { id: "empresa", label: "Empresa" },
            { id: "cargo", label: "Cargo" },
            { id: "industria", label: "Industria" },
          ].map((field) => (
            <div key={field.id} className="sm:col-span-6 col-span-12">
              <div className="mb-2 block">
                <Label htmlFor={field.id} value={field.label} />
              </div>
              <TextInput
                id={field.id}
                name={field.id}
                type="text"
                sizing="md"
                className="form-control"
                value={formData[field.id]}
                onChange={handleChange}
                required
              />
            </div>
          ))}

          <div className="col-span-12 flex items-center gap-4">
            <Button type="submit" color="primary">
              Enviar
            </Button>
          </div>
        </form>
      </TitleCard>
    </div>
  );
};

export default cotizacion;
