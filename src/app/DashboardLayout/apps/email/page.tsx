import EmaiilApp from "@/app/components/apps/email";
import type { Metadata } from "next";
import ThemeBreadcrumb from "../../layout/shared/breadcrumb/ThemeBreadcrumb";
export const metadata: Metadata = {
  title: "Email App",
};

const Emaiil = () => {
  return (
    <>
      <ThemeBreadcrumb
       title="Email App" />
      <EmaiilApp />
    </>
  );
};
export default Emaiil;
