'use client';
import { Icon } from "@iconify/react";
import { Button, Dropdown } from "flowbite-react";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SimpleBar from "simplebar-react";
import * as profileData from "./Data";
import axios from "axios";

interface User {
  usr_nombre: string;
  usr_correo: string;
  usr_fotografia: string;
}

const Profile = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    axios.get('/api/auth/me')
      .then(res => setUser(res.data.user))
      .catch(err => console.error('No autenticado', err));
  }, []);

  const userName = user?.usr_nombre || 'Cargando...';
  const userEmail = user?.usr_correo || '---';
  const userPhoto = user?.usr_fotografia || '/images/profile/default.jpg';

  return (
    <div className="relative group/menu">
      <Dropdown
        label=""
        className="w-screen sm:w-[360px] py-6 dark:bg-darkgray rounded-sm"
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
            Perfil de Usuario
          </h3>

          <div className="flex items-center gap-6 pb-5 border-b dark:border-darkborder mt-5 mb-3">
            <Image
              src={userPhoto}
              alt="Foto de perfil"
              height={80}
              width={80}
              className="rounded-full"
            />
            <div>
              <h5 className="text-base font-medium dark:text-white text-dark">{userName}</h5>
              <span className="text-muted font-medium dark:text-darkmuted text-sm">Usuario</span>
              <p className="mb-0 mt-1 font-medium text-sm flex items-center text-muted dark:text-darkmuted">
                <Icon icon="solar:mailbox-line-duotone" className="text-base me-1" />
                {userEmail}
              </p>
            </div>
          </div>
        </div>


        <div className="pt-3 px-6">
          <Button
  color={'primary'}
  onClick={async () => {
    try {
      await axios.post('/api/auth/logout');
      window.location.href = '/auth/auth2/login'; // redirección después del logout
    } catch (error) {
      console.error('Error al cerrar sesión', error);
    }
  }}
  className="w-full"
>
  Cerrar Sesión
</Button>

        </div>
      </Dropdown>
    </div>
  );
};

export default Profile;
