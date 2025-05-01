
import ThemeBreadcrumb from "@/app/DashboardLayout/layout/shared/breadcrumb/ThemeBreadcrumb";
import GalleryApp from "@/app/components/apps/userprofile/Gallery";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "User Gallery",
};

const Gallery = () => {
  return (
    <>
      <ThemeBreadcrumb title="Gallery"/>
      <GalleryApp />
    </>
  );
};

export default Gallery;
