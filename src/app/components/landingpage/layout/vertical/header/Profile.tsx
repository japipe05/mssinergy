


import { Icon } from "@iconify/react";
import { Button, Dropdown } from "flowbite-react";
import React from "react";
import * as profileData from "./Data";
import Link from "next/link";
import Image from "next/image";
import SimpleBar from "simplebar-react";
const Profile = () => {
  return (
    <div className="relative group/menu">
      <Dropdown
        label=""
        className="w-screen sm:w-[360px] py-6 dark:bg-darkgray rounded-sm"
        dismissOnClick={false}
        renderTrigger={() => (
      <span className="h-10 w-10 hover:text-primary hover:bg-lightprimary rounded-full flex justify-center items-center cursor-pointer">
        <Image
          src="/images/profile/user-1.jpg"
          alt="logo"
          height="35"
          width="35"
          className="rounded-full"
          id="dropdownProfileButton"
        />
      </span>
        )}
      >
        <div className=" px-7">
          <h3 className="mb-0 text-lg font-semibold text-dark dark:text-white">
            User Profile
          </h3>

          <div className="flex items-center gap-6 pb-5 border-b dark:border-darkborder mt-5 mb-3">
            <Image
              src="/images/profile/user-1.jpg"
              alt="logo"
              height="80"
              width="80"
              className="rounded-full"
            />
            <div>
              <h5 className="card-title text-base font-medium dark:text-white text-dark">Tania Andrew</h5>
              <span className="card-subtitle text-muted font-medium dark:text-darkmuted text-sm">Designer</span>
              <p className="card-subtitle mb-0 mt-1 font-medium text-sm flex items-center text-muted dark:text-darkmuted">
                <Icon
                  icon="solar:mailbox-line-duotone"
                  className="text-base me-1"
                />
                info@adminpro.com
              </p>
            </div>
          </div>
        </div>
        <SimpleBar>
        {profileData.profileDD.map((items, index) => (
          <Link
            href={items.url}
            className="py-3 flex justify-between items-center px-6 group/link w-full"
            key={index}
          >
            <div className="flex items-center w-full">
              <div
                className={`h-11 w-11 flex-shrink-0 rounded-md flex justify-center items-center bg-lightprimary dark:bg-lightprimary`}
              >
                <Icon
                    icon={items.icon}
                    height={20}
                    className="text-primary"
                  />
              </div>
              <div className="ps-4 flex justify-between w-full">
                <div className="w-3/4 ">
                  <h5 className="mb-1 text-sm  group-hover/link:text-primary">
                    {items.title}
                  </h5>
                  <div className="text-xs  text-darklink dark:text-darkmuted">{items.subtitle}</div>
                </div>
              </div>
            </div>
          </Link>
        ))}
        </SimpleBar>

        <div className="pt-3 px-6">
        <Button color={'primary'} as={Link} href="/auth/auth1/login" className="w-full">Logout</Button>
        </div>
      </Dropdown>
    </div>
  );
};

export default Profile;

