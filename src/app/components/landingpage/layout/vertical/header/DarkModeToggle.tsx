import { CustomizerContext } from "@/app/context/customizerContext";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useContext } from "react";

export default function DarkModeToggle(){
    const {
        activeMode,
        setActiveMode,
      } = useContext(CustomizerContext);
    return(
        <div className="relative">
        <button
          id="dropdownNotificationButton"
          onClick={()=>{
            if(activeMode==="dark"){
                setActiveMode("light")
                document.getElementsByTagName("HTML")[0].setAttribute("class","light");
            }else{
                setActiveMode("dark");
                document.getElementsByTagName("HTML")[0].setAttribute("class","dark");
            }
          }}
          className="h-10 w-10 hover:text-primary dark:hover:text-primary text-darklink dark:text-darkmuted hover:bg-lightprimary rounded-full flex justify-center items-center cursor-pointer group-hover/menu:bg-lightprimary group-hover/menu:text-primary"
          type="button"
        >
          {activeMode==="dark"?<Icon icon="solar:sun-bold-duotone" height={21} />:<Icon icon="solar:moon-bold-duotone" height={21} />}

        </button>

      </div>
    )
}