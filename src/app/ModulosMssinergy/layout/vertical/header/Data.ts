


//Apps Links Type & Data
interface appsLinkType {
  href: string;
  title: string;
  subtext: string;
  avatar: string;
}

const appsLink: appsLinkType[] = [
  {
    href: "/apps/chats",
    title: "Servicio de Calibraciones",
    subtext: "",
    avatar: `${process.env.NEXT_PUBLIC_BASE_PATH||''}/images/svgs/msicon-sv-cb.svg`,
  },
  {
    href: "/apps/chats",
    title: "Laboratorio de temperatura",
    subtext: "",
    avatar: `${process.env.NEXT_PUBLIC_BASE_PATH||''}/images/svgs/msicon-lb-tp.svg`,
  },
  {
    href: "/apps/chats",
    title: "Laboratorio de humedad relativa",
    subtext: "",
    avatar: `${process.env.NEXT_PUBLIC_BASE_PATH||''}/images/svgs/msicon-lb-hd.svg`,
  },
  {
    href: "/apps/chats",
    title: "Calificación de sistemas de apoyo crítico",
    subtext: "",
    avatar: `${process.env.NEXT_PUBLIC_BASE_PATH||''}/images/svgs/msicon-cb-st.svg`,
  },
  {
    href: "/apps/chats",
    title: "Calificaciones isotérmicos",
    subtext: "",
    avatar: `${process.env.NEXT_PUBLIC_BASE_PATH||''}/images/svgs/msicon-cb-it.svg`,
  },
  {
    href: "/apps/chats",
    title: "Mapeos Térmicos",
    subtext: "",
    avatar: `${process.env.NEXT_PUBLIC_BASE_PATH||''}/images/svgs/msicon-mp-tm.svg`,
  },
  {
    href: "/apps/chats",
    title: "Calificación de vehículos",
    subtext: "",
    avatar: `${process.env.NEXT_PUBLIC_BASE_PATH||''}/images/svgs/msicon-cb-vh.svg`,
  },
  {
    href: "/apps/ecommerce/shop",
    title: "Esterilizaciones",
    subtext: "",
    avatar: `${process.env.NEXT_PUBLIC_BASE_PATH||''}/images/svgs/msicon-est-zn.svg`,
  },
  {
    href: "/apps/ecommerce/shop",
    title: "Servicios de consultoría",
    subtext: "",
    avatar: `${process.env.NEXT_PUBLIC_BASE_PATH||''}/images/svgs/msicon-sv-cl.svg`,
  }
];

interface LinkType {
  href: string;
  title: string;
}

const pageLinks: LinkType[] = [
  {
    href: "/theme-pages/pricing",
    title: "ISO 9001",
  },
  {
    href: "/auth/auth1/login",
    title: "ISO 17025",
  },
  {
    href: "/auth/auth1/register",
    title: "Informes OMS",
  },
  {
    href: "/auth/auth1/register",
    title: "Resoluciones Invima",
  },
];

//   Search Data
interface SearchType {
  href: string;
  title: string;
}

const SearchLinks: SearchType[] = [
  {
    title: "Analytics",
    href: "/dashboards/analytics",
  },
  {
    title: "eCommerce",
    href: "/dashboards/eCommerce",
  },
  {
    title: "CRM",
    href: "/dashboards/crm",
  },
  {
    title: "Contacts",
    href: "/dashboards/eCommerce",
  },
  {
    title: "Posts",
    href: "/dashboards/posts",
  },
  {
    title: "Details",
    href: "/dashboards/details",
  },
];

//   Message Data
interface MessageType {
  title: string;
  avatar: any;
  subtitle: string;
  color: string;
  time: string;
}

import avatar1 from "/public/images/profile/user-8.jpg";
import avatar2 from "/public/images/profile/user-2.jpg";
import avatar3 from "/public/images/profile/user-3.jpg";
import avatar4 from "/public/images/profile/user-4.jpg";
import avatar5 from "/public/images/profile/user-5.jpg";

const MessagesLink: MessageType[] = [
  {
    avatar: avatar1,
    color: "bg-info",
    title: "Tania Andrew",
    subtitle: "Just see the my new admin!",
    time: "just now",
  },
  {
    avatar: avatar2,
    color: "bg-primary",
    title: "Bianca Anderson",
    subtitle: "Just a reminder that..",
    time: "5 mins ago",
  },
  {
    avatar: avatar3,
    color: "bg-secondary",
    title: "Andrew Johnson",
    subtitle: "You can customize the  ....",
    time: "10 mins ago",
  },
  {
    avatar: avatar4,
    color: "bg-warning",
    title: "Mark Strokes",
    subtitle: "Just see my new admin",
    time: "5 days ago",
  },
  {
    avatar: avatar5,
    color: "bg-success",
    title: "Mark, Stoinus & Rishvi..",
    subtitle: "Just a reminder that ...",
    time: "year ago",
  },
];

//   Notification Data
interface NotificationType {
  title: string;
  icon: any;
  subtitle: string;
  bgcolor: string;
  color:string;
  time: string;
}

const Notification: NotificationType[] = [
  {
    icon: "solar:widget-3-line-duotone",
    bgcolor: "bg-lighterror dark:bg-lighterror",
    color:'text-error',
    title: "Launch Admin",
    subtitle: "Just see the my new admin!",
    time: "9:30 AM",
  },
  {
    icon: "solar:calendar-line-duotone",
    bgcolor: "bg-lightsuccess dark:bg-lightsuccess",
    color:'text-success',
    title: "Event Today",
    subtitle: "Just a reminder that you have event",
    time: "9:15 AM",
  },
  {
    icon: "solar:settings-line-duotone",
    bgcolor: "bg-lightprimary dark:bg-lightprimary",
    color:'text-primary',
    title: "Settings",
    subtitle: "You can customize this template as you want",
    time: "4:36 PM",
  },
  {
    icon: "solar:widget-4-line-duotone",
    bgcolor: "bg-lightwarning dark:bg-lightwarning ",
    color:'text-warning',
    title: "Launch Admin",
    subtitle: "Just see the my new admin!",
    time: "9:30 AM",
  },
  {
    icon: "solar:calendar-line-duotone",
    bgcolor: "bg-lightsuccess dark:bg-lightsuccess",
    color:'text-success',
    title: "Event Today",
    subtitle: "Just a reminder that you have event",
    time: "9:15 AM",
  },
  {
    icon: "solar:settings-line-duotone",
    bgcolor: "bg-lightprimary dark:bg-lightprimary",
    color:'text-primary',
    title: "Settings",
    subtitle: "You can customize this template as you want",
    time: "4:36 PM",
  },
];

//  Profile Data
interface ProfileType {
  title: string;
  icon: any;
  subtitle: string;
  url: string;
}

const profileDD: ProfileType[] = [
  {
    icon: "solar:wallet-2-line-duotone",
    title: "My Profile",
    subtitle: "Account settings",
    url: "/apps/user-profile/profile",
  },
  {
    icon: "solar:inbox-line-duotone",
    title: "My Inbox",
    subtitle: "My Daily Notes",
    url: "/apps/email",
  },
  {
    icon: "solar:checklist-minimalistic-line-duotone",
    title: "My Tasks",
    subtitle: "To-do and Daily tasks",
    url: "/apps/notes",
  },
];

export {
  SearchLinks,
  MessagesLink,
  Notification,
  profileDD,
  appsLink,
  pageLinks
};
