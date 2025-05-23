import { Icon } from "@iconify/react";

import Profile from "./Profile";
import { Language } from "./Language";
import { DarkThemeToggle, Navbar } from "flowbite-react";


const MobileHeaderItems = () => {
  return (
    <Navbar
    fluid
    className="rounded-none bg-white dark:bg-darkgray flex-1 px-9 py-4"
  >
    {/* Toggle Icon   */}

    <div className="xl:hidden block w-full">
      <div className="flex gap-3 justify-center items-center">
        {/* Theme Toggle */}
        <DarkThemeToggle className="h-10 w-10 hover:text-primary hover:bg-lightprimary dark:hover:bg-lightprimary focus:ring-0 rounded-full flex justify-center items-center cursor-pointer text-darklink dark:text-darkmuted" />


        {/* Language Dropdown*/}
        <Language />

        {/* Shop cart */}
        {/* <Cart /> */}

        {/* Profile Dropdown */}
        <Profile />
      </div>
    </div>
  </Navbar>
  )
}

export default MobileHeaderItems