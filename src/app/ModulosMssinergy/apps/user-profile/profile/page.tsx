
"use client";
import ThemeBreadcrumb from "@/app/ModulosMssinergy/layout/shared/breadcrumb/ThemeBreadcrumb";
import UserProfileApp from "@/app/components/apps/userprofile/profile";
import type { Metadata } from "next";
import { useTranslation } from "react-i18next";
import "@/utils/i18n";




const UserProfile = () => {
  const { t } = useTranslation();
  return (
    <>
      <ThemeBreadcrumb title={t("Perfil Usuario")} />
      <UserProfileApp />
    </>
  );
};

export default UserProfile;
