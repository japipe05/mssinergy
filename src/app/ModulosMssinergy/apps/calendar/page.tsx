import CalendarApp from "@/app/components/apps/calendar";
import type { Metadata } from "next";
import ThemeBreadcrumb from "../../layout/shared/breadcrumb/ThemeBreadcrumb";
export const metadata: Metadata = {
  title: "Calendar App",
};


const page = () => {
  return (
    <>
      <ThemeBreadcrumb title="Calendar"/>
      <CalendarApp />
    </>
  );
};

export default page;
