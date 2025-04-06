import React, { useState } from 'react';
import Link from 'next/link';
import { IconChevronDown } from '@tabler/icons-react';
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import { useTranslation } from 'react-i18next';
import '../../../../../utils/i18n';
const ChildComponent = ({ item, isActive, handleMouseEnter, handleMouseLeave, onClick }: any) => {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

    const pathname = usePathname();

    const handleSubMenuEnter = () => {
        setIsSubMenuOpen(true);
    };

    const handleSubMenuLeave = () => {
        setIsSubMenuOpen(false);
    };

    const { t } = useTranslation();

    return (
        <div
            className="relative group"
            onMouseEnter={handleSubMenuEnter}
            onMouseLeave={handleSubMenuLeave}
            onClick={onClick}
        >
            <Link href={item.href}>
                <p
                    className={`w-full ${item.href === pathname
                        ? 'text-primary dark:text-primary hover:text-primary dark:hover:text-primary'
                        : 'group-hover/nav:bg-lightprimary group-hover/nav:text-primary'
                        } py-1 px-3 rounded-full flex gap-3 dark:text-subtlewhite items-center text-ld opacity-80 hover:text-primary dark:hover:text-primary`}
                >

                    <span className='flex gap-3 items-center w-full'>
                        <Icon icon={`${item.icon}`} height={18} />
                        <span className='max-w-28 truncate' >{t(`${item.title}`)}</span>
                        {item.children && <IconChevronDown size={18} className='ms-auto' />}
                    </span>
                </p>
            </Link>
            {isSubMenuOpen && item.children && (
                <div className="absolute left-full top-0 mt-0 w-56 bg-white dark:bg-dark rounded-md shadow-lg ">
                    <ul className="p-3 flex flex-col gap-2">
                        {item.children.map((child: any) => (
                            <li key={child.id}>
                                {child.children ? (
                                    <ChildComponent
                                        item={child}
                                        isActive={isActive}
                                        handleMouseEnter={handleMouseEnter}
                                        handleMouseLeave={handleMouseLeave}
                                    />
                                ) : (
                                    <Link href={child.href}>
                                        <p className={` hover:text-primary dark:hover:text-primary max-w-28 truncate ${child.href == pathname
                                            ? "!text-primary "
                                            : 'group-hover/nav:bg-lightprimary group-hover/nav:text-primary'
                                            } py-1 px-3 rounded-full flex gap-2 items-center text-ld opacity-80 hover:text-primary dark:hover:text-primary`}>
                                            <child.icon size={18} />
                                            {t(`${child.title}`)}

                                        </p>
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ChildComponent;




//     const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

//     const pathname = usePathname();

//     const handleSubMenuEnter = () => {
//         setIsSubMenuOpen(true);
//         handleMouseEnter(); // Activate parent item
//     };

//     const handleSubMenuLeave = () => {
//         setIsSubMenuOpen(false);
//         // handleMouseLeave(); // Deactivate parent item
//     };

//     return (
//         <div
//             className="relative group"
//             onMouseEnter={handleSubMenuEnter}
//             onMouseLeave={handleSubMenuLeave}
//             onClick={onClick} // Activate parent item on click
//         >
//             <Link href={item.href}>
//                 <p
//                     className={`w-full ${item.href === pathname
//                         ? 'text-primary'
//                         : 'group-hover/nav:bg-lightprimary group-hover/nav:text-primary'
//                         } py-1 px-3 rounded-full flex gap-3 items-center text-ld opacity-80`}
//                 >
//                     <span className='flex gap-3 items-center w-full'>
//                         <Icon icon={`${item.icon}`} height={18} />
//                         <span>{item.title}</span>
//                         {item.children && <IconChevronDown size={18} className='ms-auto' />}
//                     </span>
//                 </p>
//             </Link>
//             {isSubMenuOpen && item.children && (
//                 <div className="absolute left-full top-0 mt-0 w-56 bg-white dark:bg-dark rounded-md shadow-lg">
//                     <ul className="p-3 flex flex-col gap-2">
//                         {item.children.map((child) => (
//                             <li key={child.id}>
//                                 <Link href={child.href}>
//                                     <p className={`hover:text-primary dark:hover:text-primary ${child.href === pathname ? 'text-primary' : 'group-hover/nav:bg-lightprimary group-hover/nav:text-primary'} py-1 px-3 rounded-full flex gap-2 items-center text-ld opacity-80`}>
//                                         <Icon icon={`${child.icon}`} height={18} />
//                                         <span>{child.title}</span>
//                                     </p>
//                                 </Link>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ChildComponent;





