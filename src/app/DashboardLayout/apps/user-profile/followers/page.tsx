
import ThemeBreadcrumb from "@/app/DashboardLayout/layout/shared/breadcrumb/ThemeBreadcrumb";
import FollowersApp from "@/app/components/apps/userprofile/followers";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "User Followers",
};

const Followers = () => {
  return (
    <>
      <ThemeBreadcrumb title="Followers"/>
      <FollowersApp />
    </>
  );
};

export default Followers;
