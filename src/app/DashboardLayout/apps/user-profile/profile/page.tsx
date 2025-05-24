
import ThemeBreadcrumb from "@/app/DashboardLayout/layout/shared/breadcrumb/ThemeBreadcrumb";
import UserProfileApp from "@/app/components/apps/userprofile/profile";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "User Profile App",
};
const UserProfile = () => {
  return (
    <>
      <ThemeBreadcrumb title="User Profile" />
      <UserProfileApp />
    </>
  );
};

export default UserProfile;
