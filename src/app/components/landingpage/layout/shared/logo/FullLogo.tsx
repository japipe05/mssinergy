"use client"
import Image from "next/image"
import darkIcon from "/public/images/logos/dark-logo-icon.svg"
import lightIcon from "/public/images/logos/white-logo-icon.svg"
import darkText from "/public/images/logos/dark-logo-text.svg"
import lightText from "/public/images/logos/white-logo-text.svg"
import Link from "next/link"



const FullLogo = () => {
  return (
<div className="block relative z-10">
  <div className=" bg-transparent flex items-center justify-between ps-0">
    <Link
      href="/"
    >
      <b className="text-nowrap logo-img flex items-center gap-3">
        {/*You can put here icon as well // <i class="wi wi-sunset"></i> //*/}
        {/* Dark Logo icon 
        <Image
          src={darkIcon}
          alt="homepage"
          className="dark-logo block dark:hidden"
        />
        <Image
          src={lightIcon}
          alt="homepage"
          className="dark-logo hidden dark:block"
        />*/}
        {/* Light Logo icon */}
        <Image
          src={lightText}
          alt="homepage"
          className={`light-logo block dark:hidden shrink-0`}
        />
        <Image
          src={darkText}
          alt="homepage"
          className={`light-logo dark:block hidden shrink-0`}
        />
      </b>
      {/*End Logo icon */}
      {/* Logo text */}
    </Link>
  </div>
</div>

  )
}

export default FullLogo