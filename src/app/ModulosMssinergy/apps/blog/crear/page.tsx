
import ThemeBreadcrumb from "@/app/ModulosMssinergy/layout/shared/breadcrumb/ThemeBreadcrumb";
import CrearPost from "@/app/components/apps/blog/CrearPost";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ms sinergy - Post",
};
const Crearblog = () => {
  return (
    <>
     <ThemeBreadcrumb title="Crear Publicación" />
     <CrearPost/>
    </>
  );
};
export default Crearblog;
