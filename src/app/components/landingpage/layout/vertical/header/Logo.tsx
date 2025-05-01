import Image from "next/image"

import darkIcon from "/public/images/logos/dark-logo-icon.svg"
import lightIcon from "/public/images/logos/white-logo-icon.svg"
import darkText from "/public/images/logos/dark-logo-text.svg"
import lightText from "/public/images/logos/white-logo-text.svg"
import Link from "next/link"
import { useContext, useEffect } from "react"
import { CustomizerContext } from "@/app/context/customizerContext"


const Logo = () => {
  const {isCollapse,activeLayout} = useContext(CustomizerContext);


  return (
<div className="hidden lg:block">
  <div className="brand-logo bg-white dark:bg-darkgray flex items-center justify-between ps-4">
    <Link
      href="/"
    >
      <b className="text-nowrap logo-img flex items-center gap-3">
        {/*You can put here icon as well // <i class="wi wi-sunset"></i> //*/}
        {/* Dark Logo icon */}
        <Image
          src={darkIcon}
          alt="homepage"
          className="dark-logo block dark:hidden"
        />
        <Image
          src={lightIcon}
          alt="homepage"
          className="dark-logo hidden dark:block"
        />
        {/* Light Logo icon */}
        <Image
          src={darkText}
          alt="homepage"
          className={`light-logo ${isCollapse==="mini-sidebar" && activeLayout==="vertical"?"hidden":"block dark:hidden"}  shrink-0`}
        />
        <Image
          src={lightText}
          alt="homepage"
          className={`light-logo  ${isCollapse==="mini-sidebar" && activeLayout==="vertical" ?"hidden":"hidden dark:block"}  shrink-0`}
        />
      </b>
      {/*End Logo icon */}
      {/* Logo text */}
    </Link>
  </div>
</div>

  )
}

export default Logo