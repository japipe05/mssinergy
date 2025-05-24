'use client';  // Esta línea marca el componente como un Client Component

import { Button, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";

const AuthRegister = () => {
  const [image, setImage] = useState<string | null>(null);


  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      const file = files[0];
      setImage(URL.createObjectURL(file));
    }
  };
  

  return (
    <>
      <form className="mt-6">

         {/* Cargar Imagen */}
         <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="image" value="Cargar Imagen" />
          </div>
          <input
            id="image"
            type="file"
            accept="image/*"
            className="form-control"
            onChange={handleImageChange}
            style={{ borderRadius: '0.375rem', height: '2.5rem', padding: '0.5rem 1rem' }}
          />
        </div>
        {/* Vista previa de la imagen cargada */}
        {image && (
          <div className="mb-4">
            <div className="mb-2 block">
              <Label value="Vista previa de la Imagen" />
            </div>
            <img src={image} alt="Vista previa" className="w-32 h-32 object-cover rounded-md" />
          </div>
        )}
        {/* Tipo Cedula - Lista Desplegable */}
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="vctipodoc" value="Tipo Cedula" />
          </div>
          <select
            id="vctipodoc"
            className="form-control"
           
          >
            <option value="CC">Cédula de Ciudadanía (CC)</option>
            <option value="TI">Tarjeta de Identidad (TI)</option>
            <option value="NIT">Número de Identificación Tributaria (NIT)</option>
          </select>
        </div>

        {/* Cedula */}
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="nmcedula" value="Cedula" />
          </div>
          <TextInput
            id="nmcedula"
            type="text"
            sizing="md"
            className="form-control"
          />
        </div>

       

        

        {/* Nombres */}
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="vcnames" value="Nombres" />
          </div>
          <TextInput
            id="vcnames"
            type="text"
            sizing="md"
            className="form-control"
          />
        </div>

        {/* Apellidos */}
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="vclastames" value="Apellidos" />
          </div>
          <TextInput
            id="vclastames"
            type="text"
            sizing="md"
            className="form-control"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="vcemadd" value="Email" />
          </div>
          <TextInput
            id="vcemadd"
            type="text"
            sizing="md"
            className="form-control"
          />
        </div>

        {/* Contraseña */}
        <div className="mb-6">
          <div className="mb-2 block">
            <Label htmlFor="vcuserpwd" value="Contraseña" />
          </div>
          <TextInput
            id="vcuserpwd"
            type="password"
            sizing="md"
            className="form-control"
          />
        </div>

        {/* Botón de Crear */}
        <Button color={'primary'} className="rounded-md bg-primary text-white hover:bg-primaryemphasis w-full">Crear</Button>
      </form>
    </>
  )
}

export default AuthRegister;
