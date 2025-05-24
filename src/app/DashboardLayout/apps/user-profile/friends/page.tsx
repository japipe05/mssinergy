
import ThemeBreadcrumb from "@/app/DashboardLayout/layout/shared/breadcrumb/ThemeBreadcrumb";
import FriendsApp from "@/app/components/apps/userprofile/friends";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "User Friends",
};


const Friends = () => {
  return (
    <>
      <ThemeBreadcrumb title="Friends"/>
      <FriendsApp />
    </>
  );
};

export default Friends;
