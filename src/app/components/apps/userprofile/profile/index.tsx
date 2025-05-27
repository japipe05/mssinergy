"use client";
import Introduction from "@/app/components/apps/userprofile/profile/Introduction";
import Photos from "@/app/components/apps/userprofile/profile/Photos";
import Post from "@/app/components/apps/userprofile/profile/Post";
import ProfileBanner from "@/app/components/apps/userprofile/profile/ProfileBanner";
import React from "react";
import { UserDataProvider } from '@/app/context/UserDataContext/index';

const UserProfileApp = () => {
  return (
    <>
      <UserDataProvider>
        <div className="grid grid-cols-12 gap-6">
          {/* Banner */}
          <div className="col-span-12">
            <ProfileBanner />
          </div>
        
         
        </div>
      </UserDataProvider>
    </>
  );
};

export default UserProfileApp;
