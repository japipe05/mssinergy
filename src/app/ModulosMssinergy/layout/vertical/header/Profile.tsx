'use client';
import { Icon } from "@iconify/react";
import { Button, Dropdown } from "flowbite-react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useTranslation } from "react-i18next";
import "@/utils/i18n";

interface User {
  usr_nombre: string;
  usr_correo: string;
  usr_fotografia: string;
  usr_ROL: string;
}

const Profile = () => {
    const { t } = useTranslation();
  
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    axios.get('/api/auth/me')
      .then(res => setUser(res.data.user))
      .catch(err => console.error('No autenticado', err));
  }, []);

  const userName = user?.usr_nombre || 'Cargando...';
  const userEmail = user?.usr_correo || '---';
  const userPhoto = user?.usr_fotografia || '/images/profile/default.jpg';
  const usr_ROL = user?.usr_ROL || 'user';

  return (
    <div className="relative group/menu">
      <Dropdown
        label=""
        className="w-screen sm:w-[360px] py-6 dark:bg-darkgray rounded-lg shadow-lg"
        dismissOnClick={false}
        renderTrigger={() => (
          <span className="h-10 w-10 hover:text-primary hover:bg-lightprimary rounded-full flex justify-center items-center cursor-pointer">
            <Image
              src={userPhoto}
              alt="Foto de perfil"
              height={35}
              width={35}
              className="rounded-full"
              id="dropdownProfileButton"
            />
          </span>
        )}
      >
      <div className="px-7">
  <h3 className="mb-0 text-lg font-semibold text-dark dark:text-white">
    {t("Perfil Usuario")}
  </h3>

  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 pb-5 border-b dark:border-darkborder mt-5 mb-3">
    <Image
      src={userPhoto}
      alt="Foto de perfil"
      height={80}
      width={80}
      className="rounded-full"
    />
    <div className="text-center sm:text-left w-full sm:max-w-[250px] overflow-hidden">
      {/* Nombre */}
      <h5 className="text-base font-medium dark:text-white text-dark break-words truncate">
        {userName}
      </h5>

      {/* Rol */}
      <span className="text-muted font-medium dark:text-darkmuted text-sm">
         {usr_ROL}
      </span>

      {/* Correo */}
      <p className="mb-0 mt-1 font-medium text-sm flex items-center justify-center sm:justify-start text-muted dark:text-darkmuted overflow-hidden">
        <Icon icon="solar:mailbox-line-duotone" className="text-base me-1 shrink-0" />
        <span className="truncate w-full">{userEmail}</span>
      </p>
    </div>
  </div>
</div>


        <div className="pt-3 px-6">
          <Button
            color="primary"
            onClick={async () => {
              try {
                await axios.post('/api/auth/logout');
                window.location.href = '/auth/auth2/login';
              } catch (error) {
                console.error('Error al cerrar sesión', error);
              }
            }}
            className="w-full"
          >
            {t("Cerrar Sesión")}
          </Button>
        </div>
      </Dropdown>
    </div>
  );
};

export default Profile;
