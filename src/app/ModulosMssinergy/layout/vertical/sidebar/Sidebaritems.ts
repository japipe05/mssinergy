import { uniqueId } from "lodash";

export interface MenuitemsType {
  [x: string]: any;
  id?: string;
  navlabel?: boolean;
  subheader?: string;
  title?: string;
  icon?: any;
  href?: string;
  children?: MenuitemsType[];
  chip?: string;
  chipColor?: string;
  variant?: string;
  external?: boolean;
  collapsedMenu?: boolean;
  dropdownItem?: boolean;
  modulo?: string; // Permiso requerido
}

const SidebarContent: MenuitemsType[] = [
  {
    id: uniqueId(),
    navlabel: true,
    subheader: "APPS",
  },
  {
    title: "Blogs",
    id: uniqueId(),
    icon: "solar:widget-add-line-duotone",
    children: [
      {
        id: uniqueId(),
        title: "Crear publicación",
        href: "/ModulosMssinergy/apps/blog/crear",
        icon: "solar:stop-circle-line-duotone",
        dropdownItem: true,
        modulo: "BLOG_CREAR", // 🔐 permiso requerido
      },
      {
        id: uniqueId(),
        title: "Publicaciones",
        href: "/ModulosMssinergy/apps/blog/post",
        icon: "solar:stop-circle-line-duotone",
        dropdownItem: true,
        modulo: "BLOG_POST",
      },
    ],
  }, 
];

export default SidebarContent;
