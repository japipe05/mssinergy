"use client";
import React from "react";
import { IconHeart, IconPhoto, IconUserCircle, IconUserScreen } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const ProfileTab = () => {
  const location = usePathname();
  const ProfileTabs = [
    {
      label: "Profile",
      icon: <IconUserCircle size="20" />,
      to: "/apps/user-profile/profile",
    },
    {
      label: "Followers",
      icon: <IconHeart size="20" />,
      to: "/apps/user-profile/followers",
    },
    {
      label: "Friends",
      icon: <IconUserScreen size="20" />,
      to: "/apps/user-profile/friends",
    },
    {
      label: "Gallery",
      icon: <IconPhoto size="20" />,
      to: "/apps/user-profile/gallery",
    },
  ];

  return (
    <>
      <div className="bg-lightprimary dark:bg-lightprimary">
        <div className="flex justify-end ">
          {ProfileTabs.map((tab) => (
            <Link
              href={tab.to}
              className={
                location === tab.to
                  ? "flex gap-2 items-center px-4 py-3 border-b-2 border-primary text-primary"
                  : "flex gap-2 items-center px-4 py-3 border-b-2 border-transparent text-ld opacity-80"
              }
            >
              {tab.icon}
              <span className="md:block hidden font-medium">{tab.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProfileTab;
