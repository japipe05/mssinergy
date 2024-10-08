import AccountSettingIndex from "@/app/components/theme-pages/account-settings";
import type { Metadata } from "next";
import ThemeBreadcrumb from "../../layout/shared/breadcrumb/ThemeBreadcrumb";
export const metadata: Metadata = {
  title: "Account Settings Page",
  description: "Generated by create next app",
};

const Accountsettings = () => {
  return (
    <>
      <ThemeBreadcrumb title="Account Setting" />
      <AccountSettingIndex />
    </>
  );
};

export default Accountsettings;
