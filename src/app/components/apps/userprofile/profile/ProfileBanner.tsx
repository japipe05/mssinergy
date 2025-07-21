'use client';
import React, { useEffect, useState } from "react";
import {
  IconMail,
  IconPhone,
  IconFlag,
  IconUserShield,
  IconCalendarTime,
  IconEdit,
} from "@tabler/icons-react";
import CardBox from "@/app/components/shared/CardBox";
import Image from "next/image";
import Banner from "/public/images/backgrounds/profilebg.jpg";
import { Alert, Button, Label, Modal } from "flowbite-react";
import axios from "axios";

interface User {
  usr_id: string;
  usr_nombre: string;
  usr_correo: string;
  usr_fotografia: string;
  usr_codigo_pais: string;
  usr_celular: string;
  usr_estado: string;
  usr_ROL: string;
  usr_fecha_creacion: string;
}

const ProfileBanner = () => {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  useEffect(() => {
    axios.get('/api/auth/me')
      .then(res => setUser(res.data.user))
      .catch(err => console.error('❌ No autenticado 1:', err));
  }, []);

  if (!user) return <p className="text-center py-10">Cargando perfil...</p>;

  return (
    <>
      {/* Alertas de éxito y error */}
      {successMessage && (
        <div className="mb-4">
          <Alert color="success" onDismiss={() => setSuccessMessage(null)} className="rounded-md">
            <span className="font-medium">{successMessage}</span>
          </Alert>
        </div>
      )}
      {errorMessage && (
        <div className="mb-4">
          <Alert color="failure" onDismiss={() => setErrorMessage(null)} className="rounded-md">
            ❌ <span className="font-medium">{errorMessage}</span>
          </Alert>
        </div>
      )}
      <CardBox className="p-0 overflow-hidden">
        <Image src={Banner} alt="profile banner" className="w-full" height={330} />
        <div className="bg-white dark:bg-dark p-6 -mt-2">
          <div className="grid grid-cols-12 gap-6">
            <div className="lg:col-span-4 col-span-12 flex flex-col items-center">
              <Image
                src={user.usr_fotografia}
                alt="profile"
                height={100}
                width={100}
                className="rounded-full border-4 border-white dark:border-darkborder -mt-16"
              />
              <h5 className="text-lg mt-3 font-semibold">{user.usr_nombre}</h5>
              <Button size="xs" onClick={() => setIsEditOpen(true)} className="rounded-md bg-primary text-white hover:bg-primaryemphasis py-2 px-2 text-sm">
                <IconEdit size={16} className="mr-1" /> Actualizar perfil
              </Button>
            </div>

            <div className="lg:col-span-8 col-span-12">
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-300">
                <div className="flex items-center gap-2">
                  <IconMail size={18} className="text-primary" />
                  <span>{user.usr_correo}</span>
                </div>
                <div className="flex items-center gap-2">
                  <IconFlag size={18} className="text-primary" />
                  <span>{user.usr_ROL}</span>
                </div>
                <div className="flex items-center gap-2">
                  <IconPhone size={18} className="text-primary" />
                  <span>{user.usr_codigo_pais} {user.usr_celular}</span>
                </div>
                <div className="flex items-center gap-2">
                  <IconUserShield size={18} className="text-primary" />
                  <span>{user.usr_estado}</span>
                </div>
                <div className="flex items-center gap-2">
                  <IconCalendarTime size={18} className="text-primary" />
                  <span>{new Date(user.usr_fecha_creacion).toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardBox>

      {/* Edit Modal */}
    <Modal show={isEditOpen} onClose={() => setIsEditOpen(false)}>
  <Modal.Header className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
    Editar Perfil
  </Modal.Header>
  <form
    onSubmit={async (e) => {
      e.preventDefault();
      try {
        const formData = new FormData();
        formData.append("usr_nombre", user.usr_nombre);
        formData.append("usr_correo", user.usr_correo);
        formData.append("usr_codigo_pais", user.usr_codigo_pais);
        formData.append("usr_celular", user.usr_celular);
        formData.append("usr_estado", user.usr_estado);
        formData.append("usr_ROL", user.usr_ROL);

        if (selectedFile) {
          formData.append("file", selectedFile);
        } else {
          formData.append("usr_fotografia", user.usr_fotografia);
        }

        await axios.put(`/api/auth/users/${user.usr_id}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        const updated = await axios.get('/api/auth/me');
        setUser(updated.data.user);
        setSuccessMessage("Usuario actualizado correctamente.");
        setTimeout(() => setSuccessMessage(null), 2000);
        setIsEditOpen(false);
      } catch (error) {
        console.error("❌ Error actualizando usuario:", error);
        setErrorMessage("Error actualizado usuario.");
        setTimeout(() => setErrorMessage(null), 2000);
      }
    }}
  >
    <Modal.Body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-300">
      <div className="space-y-4">
        {/* Imagen */}
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="image" className="text-gray-700 dark:text-gray-300" value="Cargar Imagen" />
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                setSelectedFile(file);
                const reader = new FileReader();
                reader.onloadend = () => {
                  if (typeof reader.result === "string") {
                    setUser({ ...user, usr_fotografia: reader.result });
                  }
                };
                reader.readAsDataURL(file);
              }
            }}
            className="bg-white text-gray-900 dark:bg-gray-800 dark:text-white rounded px-4 py-2 w-full border border-gray-300 dark:border-gray-600"
          />
          {user.usr_fotografia && (
            <img
              src={user.usr_fotografia}
              alt="preview"
              className="w-20 h-20 mt-2 rounded-full object-cover"
            />
          )}
        </div>

        {/* Nombre */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Nombre</label>
          <input
            type="text"
            value={user.usr_nombre}
            onChange={(e) => setUser({ ...user, usr_nombre: e.target.value })}
            className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded p-2 text-sm text-gray-900 dark:text-white"
            required
          />
        </div>

        {/* Correo */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Correo</label>
          <input
            type="email"
            value={user.usr_correo}
            onChange={(e) => setUser({ ...user, usr_correo: e.target.value })}
            className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded p-2 text-sm text-gray-900 dark:text-white"
            required
          />
        </div>

        {/* Teléfono */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Teléfono</label>
          <div className="flex gap-2">
            <select
              value={user.usr_codigo_pais}
              onChange={(e) =>
                setUser({ ...user, usr_codigo_pais: e.target.value })
              }
              className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded p-2 text-sm"
            >
              <option value="+57">🇨🇴 +57</option>
              <option value="+1">🇺🇸 +1</option>
              <option value="+52">🇲🇽 +52</option>
              <option value="+54">🇦🇷 +54</option>
            </select>
            <input
              type="tel"
              value={user.usr_celular}
              onChange={(e) => setUser({ ...user, usr_celular: e.target.value })}
              className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded p-2 text-sm text-gray-900 dark:text-white"
              placeholder="3214567890"
              required
            />
          </div>
        </div>
      </div>
    </Modal.Body>
    <Modal.Footer className="bg-white dark:bg-gray-900">
      <Button
        color="gray"
        onClick={() => setIsEditOpen(false)}
        className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600"
      >
        Cancelar
      </Button>
      <Button
        type="submit"
        className="bg-green-600 text-white hover:bg-green-500"
      >
        Guardar cambios
      </Button>
    </Modal.Footer>
  </form>
</Modal>


    </>
  );
};

export default ProfileBanner;
