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
}


import { uniqueId } from "lodash";

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
          title: "Blog Post",
          href: "/ModulosMssinergy/apps/blog/post",
          icon: "solar:stop-circle-line-duotone",
          dropdownItem:true
        },
      
      ],
    },

];

export default SidebarContent;
