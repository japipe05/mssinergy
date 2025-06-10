'use client';
import React, { useEffect, useState } from "react";
import {
  IconBrandDribbble,
  IconBrandFacebook,
  IconBrandYoutube,
  IconMail,
  IconPhone,
  IconFlag,
  IconUserShield,
  IconCalendarTime,
} from "@tabler/icons-react";
import CardBox from "@/app/components/shared/CardBox";
import Image from "next/image";
import Banner from "/public/images/backgrounds/profilebg.jpg";
import Link from "next/link";
import { Button } from "flowbite-react";
import ProfileTab from "./ProfileTab";
import axios from "axios";
import profileImage from "/public/uploads/registro/1749425921145-3andresfelipe.jpg"
interface User {
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
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
  axios.get('/api/auth/me')
    .then(res => {
       console.log('📷 usr_fotografia:', res.data.user.usr_fotografia);
      setUser(res.data.user);
    })
    .catch(err => {
      console.error('❌ No autenticado:', err);
    });
}, []);


  if (!user) return <p className="text-center py-10">Cargando perfil...</p>;

  return (
    <CardBox className="p-0 overflow-hidden">
      <Image
        src={Banner}
        alt="profile banner"
        className="w-full"
        height={330}
      />
      <div className="bg-white dark:bg-dark p-6 -mt-2">
        <div className="grid grid-cols-12 gap-6">
          <div className="lg:col-span-4 col-span-12 flex flex-col items-center">
            <Image
              src={ user.usr_fotografia }
              alt="profile"
              height={100}
              width={100}
              className="rounded-full border-4 border-white dark:border-darkborder -mt-16"
            />

             <Image
              src={ profileImage}
              alt="profile"
              height={100}
              width={100}
              className="rounded-full border-4 border-white dark:border-darkborder -mt-16"
            />

            <Image
              src={ "public/uploads/registro/1749425921145-3andresfelipe.jpg"}
              alt="profile"
              height={100}
              width={100}
              className="rounded-full border-4 border-white dark:border-darkborder -mt-16"
            />
            <h5 className="text-lg mt-3 font-semibold">{user.usr_nombre}</h5>
            
        {user.usr_fotografia && (
  <p className="text-xs text-gray-400">Fotografía URL: {user.usr_fotografia}  </p>
)}

{profileImage && (
  <p className="text-xs text-gray-400">Fotografía URL: {profileImage.src}</p>
)}


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
  );
};

export default ProfileBanner;
