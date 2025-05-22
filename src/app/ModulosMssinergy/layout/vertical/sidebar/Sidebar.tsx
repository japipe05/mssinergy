"use client";
import React, { useEffect,useState } from "react";
import { Sidebar } from "flowbite-react";
import SidebarContent from "./Sidebaritems";
import NavItems from "./NavItems";
import NavCollapse from "./NavCollapse";
import SimpleBar from "simplebar-react";
import Image from "next/image";
import profileImage from "/public/images/profile/user-1.jpg"
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import axios from "axios";
interface User {
  usr_nombre: string;
  usr_correo: string;
  usr_fotografia: string;
}

const SidebarLayout = () => {

  const Profile_Navitems = [
    {
      key:'profile',
      title:"My perfil",
      href:"/ModulosMssinergy/apps/user-profile/profile"
    },
  ]

  const[profileDD,setProfileDD] = useState("");
  const handleProfile = () => {
    if(profileDD===""){
      setProfileDD("active");
    }else{
      setProfileDD("")
    }
  }

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    axios.get('/api/auth/me')
      .then(res => setUser(res.data.user))
      .catch(err => console.error('No autenticado', err));
  }, []);

  const userName = user?.usr_nombre || 'Cargando...';
  const userEmail = user?.usr_correo || '---';
  const userPhoto = user?.usr_fotografia || '/images/profile/default.jpg';



  return (
    <div>
      <Sidebar
        className="fixed top-[72px] xl:start-0 -start-[240px] z-10 transition-all menu-sidebar bg-darkgray dark:bg-darkgray px-0"
        aria-label="Sidebar with multi-level dropdown example"
      >
        <SimpleBar className="h-[calc(100vh_-_100px)]">
        <div className="pt-4 pb-2 mb-2 border-b border-darkborder dark:border-darkborder px-2">
       <Link href="#" className="flex justify-between items-center py-3 px-1 mb-0.5" onClick={handleProfile}>
          <div className="flex items-center hide-profile gap-3">
            <Image src={userPhoto} alt="profile-image" width={30} height={30} className="rounded-full  ml-[5px]" />
             <span className={`text-white shrink-0 whitespace-nowrap font-light hide-menu ${profileDD==="active"?"font-medium":null}`} >{userName}</span>
          </div>
           <Icon icon="octicon:chevron-right-24" className={`text-lg hide-menu shrink-0  transition-all text-white ${profileDD==="active"?"rotate-90":null}`} />
        </Link>
         <ul className={` profile-menu ${profileDD} overflow-hidden`}>
          {Profile_Navitems && Profile_Navitems.map((item)=>{
            return (
              <li key={item.key} className="text-white items-center flex gap-2 font-light hover:text-opacity-100 text-opacity-60 dark:text-opacity-60 py-3 px-1 mb-0.5 text-sm">
                <Icon icon="solar:stop-circle-line-duotone" className="text-white text-opacity-60 block mx-4 dark:text-opacity-60 text-xs" />
                <Link href={item.href} className="hide-menu" >{item.title}</Link>
              </li>
            )
          })}
         </ul>
       </div>
          <Sidebar.Items>
            <Sidebar.ItemGroup className="sidebar-nav px-2 space-y-0">
                {
                  SidebarContent && SidebarContent.map((item)=>{
                     return (
                      <React.Fragment key={item.id} >
                        {item.navlabel?<li className="mt-4 nav-small-cap">
                          <span className=" block hide-menu leading-6 text-xs text-white text-opacity-60 dark:text-opacity-60 uppercase font-medium" >{item.subheader}</span>
                          <Icon icon="tabler:dots" className="text-white text-opacity-60 block mt-0 leading-6 dark:text-opacity-60 hide-icon" />
                        </li>:(
                          item.children ? (
                            <div className="dropitems" >
                            <NavCollapse item={item} />
                            </div>
                          ) : (
                            <NavItems item={item} />
                          )
                        )}
                      </React.Fragment>
                     )
                  })
                }
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </SimpleBar>
      </Sidebar>
    </div>
  );
};

export default SidebarLayout;
