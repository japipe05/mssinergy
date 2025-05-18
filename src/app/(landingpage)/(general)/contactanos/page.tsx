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

const contactanos = () => {
  const [formData, setFormData] = useState({
    titulo:"",
    mail:"",
    descripcion: "",
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
      titulo: formData.titulo,
      mail: formData.mail,
      descripcion: formData.descripcion,
      to_email: "felipehuchijagmail.com",
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, userId);
      alert("Correo enviado correctamente");
      setFormData({
        titulo:"",
        mail:"",
        descripcion: "",
      });
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      alert("Hubo un error al enviar el correo");
    }
  };

  return (
    <div>
      <TitleCard title="contactanos">
        <div className="pb-6">
          <Alert color="lightprimary" icon={HiInformationCircle}>
            <span className="font-medium">Información Contactanos</span>
          </Alert>
        </div>
        <form onSubmit={handleSubmit} className="grid grid-cols-12 gap-6">
          <div className="sm:col-span-6 col-span-12">
            <Label htmlFor="titulo" value="Titulo" />
            <TextInput id="titulo" name="titulo" type="text" onChange={handleChange} required />
          </div>

          <div className="sm:col-span-6 col-span-12">
            <Label htmlFor="mail" value="Mail" />
            <TextInput id="mail" name="mail" type="text" onChange={handleChange} required />
          </div>
          
          <div className="col-span-12">
            <Label htmlFor="descripcion" value="Descripción de la solicitud" />
            <Textarea id="descripcion" name="descripcion" rows={4} onChange={handleChange} required />
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

export default contactanos;
