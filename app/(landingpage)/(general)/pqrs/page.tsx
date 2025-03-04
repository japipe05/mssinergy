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

import TitleCard from "../../../components/shared/TitleBorderCard";
import { HiInformationCircle } from "react-icons/hi";
import emailjs from "@emailjs/browser";

const pqrs = () => {
  const [formData, setFormData] = useState({
    from_name :"",
    area: "",
    solicitud: "",
    motivo: "",
    descripcion: "",
    tipoDocumento: "",
    numeroDocumento: "",
    nombre: "",
    cargo: "",
    empresa: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)  => {
    e.preventDefault();

    const serviceId = "service_tl7chls";
    const templateId = "template_c79gflw";
    const userId = "0hlLNFNigpf22GmEk";

    const templateParams = {
      from_name: formData.nombre,
      area: formData.area,
      solicitud: formData.solicitud,
      motivo: formData.motivo,
      descripcion: formData.descripcion,
      tipoDocumento: formData.tipoDocumento,
      numeroDocumento: formData.numeroDocumento,
      nombre: formData.nombre,
      cargo: formData.cargo,
      empresa: formData.empresa,
      to_email: "felipehuchijagmail.com",
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, userId);
      alert("Correo enviado correctamente");
      setFormData({
        area: "",
        solicitud: "",
        motivo: "",
        descripcion: "",
        tipoDocumento: "",
        numeroDocumento: "",
        nombre: "",
        cargo: "",
        empresa: "",
      });
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      alert("Hubo un error al enviar el correo");
    }
  };

  return (
    <div>
      <TitleCard title="PQRS">
        <div className="pb-6">
          <Alert color="lightprimary" icon={HiInformationCircle}>
            <span className="font-medium">Información PQR</span>
          </Alert>
        </div>
        <form onSubmit={handleSubmit} className="grid grid-cols-12 gap-6">
          <div className="sm:col-span-6 col-span-12">
            <Label htmlFor="area" value="Área" />
            <Select id="area" name="area" required value={formData.area}  onChange={handleChange}>
              <option value="" disabled>Seleccione una opción</option>
              <option>Laboratorio de Calibraciones</option>
              <option>Laboratorio de Ensayos</option>
              <option>Laboratorio de temperatura y humedad relativa</option>
            </Select>
          </div>

          <div className="sm:col-span-6 col-span-12">
            <Label htmlFor="solicitud" value="Solicitud" />
            <Select id="solicitud" name="solicitud" required value={formData.solicitud}  onChange={handleChange}>
            <option value="" disabled>Seleccione una opción</option>
              <option>Petición</option>
              <option>Queja</option>
              <option>Reclamo</option>
            </Select>
          </div>

          <div className="col-span-12">
            <Label htmlFor="motivo" value="Motivo" />
            <TextInput id="motivo" name="motivo" type="text" onChange={handleChange} required />
          </div>

          <div className="col-span-12">
            <Label htmlFor="descripcion" value="Descripción de la solicitud" />
            <Textarea id="descripcion" name="descripcion" rows={4} onChange={handleChange} required />
          </div>

          <div className="sm:col-span-6 col-span-12">
            <Label htmlFor="tipoDocumento" value="Tipo de documento" />
            <Select id="tipoDocumento" name="tipoDocumento" required value={formData.tipoDocumento} onChange={handleChange}>
            <option value="" disabled>Seleccione una opción</option>
              <option>Cédula de ciudadanía</option>
              <option>Cédula de extranjería</option>
              <option>NIT</option>
              <option>Pasaporte</option>
            </Select>
          </div>

          <div className="sm:col-span-6 col-span-12">
            <Label htmlFor="numeroDocumento" value="Número de documento" />
            <TextInput id="numeroDocumento" name="numeroDocumento" type="text" onChange={handleChange} required />
          </div>

          <div className="sm:col-span-6 col-span-12">
            <Label htmlFor="nombre" value="Nombre" />
            <TextInput id="nombre" name="nombre" type="text" onChange={handleChange} required />
          </div>

          <div className="sm:col-span-6 col-span-12">
            <Label htmlFor="cargo" value="Cargo" />
            <TextInput id="cargo" name="cargo" type="text" onChange={handleChange} required />
          </div>

          <div className="sm:col-span-6 col-span-12">
            <Label htmlFor="empresa" value="Empresa" />
            <TextInput id="empresa" name="empresa" type="text" onChange={handleChange} required />
          </div>

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

export default pqrs;
