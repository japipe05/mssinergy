
import ContactApp from "@/app/components/apps/contacts/index";
import { Metadata } from "next";
import ThemeBreadcrumb from "../../layout/shared/breadcrumb/ThemeBreadcrumb";
export const metadata: Metadata = {
  title: "Contact App",
};

const Contacts = () => {
  return (
    <>
      <ThemeBreadcrumb title="Contact App"/>
      <ContactApp />
    </>
  );
};

export default Contacts;
