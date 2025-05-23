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
    subheader: "Dashboard",
  },

  {
    id: uniqueId(),
    title: "Minimal",
    icon: 'solar:atom-line-duotone',
    href: "/dashboards/minimal",
  },
  {
    id: uniqueId(),
    title: "Analytical",
    icon: 'solar:box-minimalistic-line-duotone',
    href: "/",
  },
  {
    id: uniqueId(),
    title: "Demographical",
    icon: 'solar:layers-line-duotone',
    href: "/dashboards/demographical",
  },
  {
    id: uniqueId(),
    title: "Modern",
    icon: 'solar:basketball-line-duotone',
    href: "/dashboards/modern",
  },

  {
    id: uniqueId(),
    navlabel: true,
    subheader: "APPS",
  },

    {
      id: uniqueId(),
      title: "Contacts",
      icon: "solar:phone-line-duotone",
      href: "/apps/contacts",
    },
    {
      title: "Ecommerce",
      id: uniqueId(),
      icon: "solar:cart-3-line-duotone",
      children: [
        {
          id: uniqueId(),
          title: "Shop",
          href: "/apps/ecommerce/shop",
          icon: "solar:stop-circle-line-duotone",
          dropdownItem:true
        },
        {
          id: uniqueId(),
          title: "Details",
          href: '/apps/ecommerce/detail/1',
          icon: "solar:stop-circle-line-duotone",
          dropdownItem:true
        },
        {
          id: uniqueId(),
          title: "List",
          href: "/apps/ecommerce/list",
          icon: "solar:stop-circle-line-duotone",
          dropdownItem:true
        },
        {
          id: uniqueId(),
          title: "Checkout",
          href: "/apps/ecommerce/checkout",
          icon: "solar:stop-circle-line-duotone",
          dropdownItem:true
        },
        {
          id: uniqueId(),
          title: "Add Product",
          href: "/apps/ecommerce/addproduct",
          icon: "solar:stop-circle-line-duotone",
          dropdownItem:true
        },
        {
          id: uniqueId(),
          title: "Edit Product",
          href: "/apps/ecommerce/editproduct",
          icon: "solar:stop-circle-line-duotone",
          dropdownItem:true
        },
      ],
    },
    {
      title: "Blogs",
      id: uniqueId(),
      icon: "solar:widget-add-line-duotone",
      children: [
        {
          id: uniqueId(),
          title: "Blog Post",
          href: "/apps/blog/post",
          icon: "solar:stop-circle-line-duotone",
          dropdownItem:true
        },
        {
          id: uniqueId(),
          title: "Blog Detail",
          href: "/apps/blog/detail/streaming-video-way-before-it-was-cool-go-dark-tomorrow",
          icon: "solar:stop-circle-line-duotone",
          dropdownItem:true
        },
      ],
    },
    {
      id: uniqueId(),
      title: "Chats",
      icon: "solar:chat-round-line-line-duotone",
      href: "/apps/chats",
    },
    {
      title: "User Profile",
      id: uniqueId(),
      icon: "solar:shield-user-outline",
      children: [
        {
          id: uniqueId(),
          title: "Profile",
          href: "/apps/user-profile/profile",
          icon: "solar:stop-circle-line-duotone",
          dropdownItem:true
        },
        {
          id: uniqueId(),
          title: "Followers",
          href: "/apps/user-profile/followers",
          icon: "solar:stop-circle-line-duotone",
          dropdownItem:true
        },
        {
          id: uniqueId(),
          title: "Friends",
          href: "/apps/user-profile/friends",
          icon: "solar:stop-circle-line-duotone",
          dropdownItem:true
        },
        {
          id: uniqueId(),
          title: "Gallery",
          href: "/apps/user-profile/gallery",
          icon: "solar:stop-circle-line-duotone",
          dropdownItem:true
        },
      ],
    },
    {
      title: "Invoice",
      id: uniqueId(),
      icon: "solar:bill-check-outline",
      children: [
        {
          id: uniqueId(),
          title: "List",
          href: "/apps/invoice/list",
          icon: "solar:stop-circle-line-duotone",
          dropdownItem:true
        },
        {
          id: uniqueId(),
          title: "Details",
          href: "/apps/invoice/detail/PineappleInc",
          icon: "solar:stop-circle-line-duotone",
          dropdownItem:true
        },
        {
          id: uniqueId(),
          title: "Create",
          href: "/apps/invoice/create",
          icon: "solar:stop-circle-line-duotone",
          dropdownItem:true
        },
        {
          id: uniqueId(),
          title: "Edit",
          href: "/apps/invoice/edit/PineappleInc",
          icon: "solar:stop-circle-line-duotone",
          dropdownItem:true
        },
      ],
    },

    {
      id: uniqueId(),
      title: "Notes",
      icon: "solar:document-text-line-duotone",
      href: "/apps/notes",
    },
    {
      id: uniqueId(),
      title: "Calendar",
      icon: "solar:calendar-mark-line-duotone",
      href: "/apps/calendar",
    },
    {
      id: uniqueId(),
      title: "Email",
      icon: "solar:letter-line-duotone",
      href: "/apps/email",
    },
    {
      id: uniqueId(),
      title: "Tickets",
      icon: "solar:ticker-star-outline",
      href: "/apps/tickets",
    },
    {
      id: uniqueId(),
      title: 'Kanban',
      icon: 'solar:notebook-linear',
      href: '/apps/kanban',
    },

  {
    id: uniqueId(),
    navlabel: true,
    subheader: "PAGES",
  },
    {
      title: "Account Setting",
      icon: "solar:settings-minimalistic-line-duotone",
      id: uniqueId(),
      href: "/theme-pages/account-settings",
    },
    {
      title: "FAQ",
      icon: "solar:question-circle-line-duotone",
      id: uniqueId(),
      href: "/theme-pages/faq",
    },
    {
      title: "Pricing",
      icon: "solar:dollar-minimalistic-linear",
      id: uniqueId(),
      href: "/theme-pages/pricing",
    },
    {
      title: "Landingpage",
      icon: "solar:bill-list-line-duotone",
      id: uniqueId(),
      href: "/landingpage",
    },
    {
      title: "Roll Base Access",
      icon: "solar:accessibility-broken",
      id: uniqueId(),
      href: "/theme-pages/casl",
    },



  {
    id: uniqueId(),
    navlabel: true,
    subheader: "UI",
  },
  {
    id: uniqueId(),
    title: "UI Elements",
    icon: "solar:widget-line-duotone",
    href: "/ui-components/accordion",
    children: [
      {
        id: uniqueId(),
        title: "Accordion",
        icon: "solar:stop-circle-line-duotone",
        href: "/ui-components/accordion",
        dropdownItem: true
      },
      {
        id: uniqueId(),
        title: "Badge",
        icon: "solar:stop-circle-line-duotone",
        href: "/ui-components/badge",
        dropdownItem: true
      },
      {
        id: uniqueId(),
        title: "Button",
        icon: "solar:stop-circle-line-duotone",
        href: "/ui-components/buttons",
        dropdownItem: true
      },
      {
        id: uniqueId(),
        title: "Dropdowns",
        icon: "solar:stop-circle-line-duotone",
        href: "/ui-components/dropdown",
        dropdownItem: true
      },
      {
        id: uniqueId(),
        title: "Modals",
        icon: "solar:stop-circle-line-duotone",
        href: "/ui-components/modals",
        dropdownItem: true
      },
      {
        id: uniqueId(),
        title: "Tab",
        icon: "solar:stop-circle-line-duotone",
        href: "/ui-components/tab",
        dropdownItem: true
      },
      {
        id: uniqueId(),
        title: "Tooltip",
        icon: "solar:stop-circle-line-duotone",
        href: "/ui-components/tooltip",
        dropdownItem: true
      },
      {
        id: uniqueId(),
        title: "Alert",
        icon: "solar:stop-circle-line-duotone",
        href: "/ui-components/alert",
        dropdownItem: true
      },
      {
        id: uniqueId(),
        title: "Progressbar",
        icon: "solar:stop-circle-line-duotone",
        href: "/ui-components/progressbar",
        dropdownItem: true
      },
      {
        id: uniqueId(),
        title: "Breadcrumbs",
        icon: "solar:stop-circle-line-duotone",
        href: "/ui-components/breadcrumb",
        dropdownItem: true
      },
      {
        id: uniqueId(),
        title: "Drawer",
        icon: "solar:stop-circle-line-duotone",
        href: "/ui-components/drawer",
        dropdownItem: true
      },
      {
        id: uniqueId(),
        title: "Lists",
        icon: "solar:stop-circle-line-duotone",
        href: "/ui-components/listgroup",
        dropdownItem: true
      },
      {
        id: uniqueId(),
        title: "Carousel",
        icon: "solar:stop-circle-line-duotone",
        href: "/ui-components/carousel",
        dropdownItem: true
      },
      {
        id: uniqueId(),
        title: "Avatar",
        icon: "solar:stop-circle-line-duotone",
        href: "/ui-components/avatar",
        dropdownItem: true
      },
      {
        id: uniqueId(),
        title: "Banner",
        icon: "solar:stop-circle-line-duotone",
        href: "/ui-components/banner",
        dropdownItem: true
      },
      {
        id: uniqueId(),
        title: "Button Group",
        icon: "solar:stop-circle-line-duotone",
        href: "/ui-components/button-group",
        dropdownItem: true
      },
      {
        id: uniqueId(),
        title: "Card",
        icon: "solar:stop-circle-line-duotone",
        href: "/ui-components/card",
        dropdownItem: true
      },
      {
        id: uniqueId(),
        title: "Datepicker",
        icon: "solar:stop-circle-line-duotone",
        href: "/ui-components/datepicker",
        dropdownItem: true
      },
      {
        id: uniqueId(),
        title: "Footer",
        icon: "solar:stop-circle-line-duotone",
        href: "/ui-components/footer",
        dropdownItem: true
      },
      {
        id: uniqueId(),
        title: "KBD",
        icon: "solar:stop-circle-line-duotone",
        href: "/ui-components/kbd",
        dropdownItem: true
      },
      {
        id: uniqueId(),
        title: "Mega Menu",
        icon: "solar:stop-circle-line-duotone",
        href: "/ui-components/megamenu",
        dropdownItem: true
      },
      {
        id: uniqueId(),
        title: "Navbar",
        icon: "solar:stop-circle-line-duotone",
        href: "/ui-components/navbar",
        dropdownItem: true
      },
      {
        id: uniqueId(),
        title: "Popover",
        icon: "solar:stop-circle-line-duotone",
        href: "/ui-components/popover",
        dropdownItem: true
      },
      {
        id: uniqueId(),
        title: "Rating",
        icon: "solar:stop-circle-line-duotone",
        href: "/ui-components/rating",
        dropdownItem: true
      },
      {
        id: uniqueId(),
        title: "Sidebar",
        icon: "solar:stop-circle-line-duotone",
        href: "/ui-components/sidebar",
        dropdownItem: true
      },
      {
        id: uniqueId(),
        title: "Tables",
        icon: "solar:stop-circle-line-duotone",
        href: "/ui-components/tables",
        dropdownItem: true
      },
      {
        id: uniqueId(),
        title: "Timeline",
        icon: "solar:stop-circle-line-duotone",
        href: "/ui-components/timeline",
        dropdownItem: true
      },
      {
        id: uniqueId(),
        title: "Toast",
        icon: "solar:stop-circle-line-duotone",
        href: "/ui-components/toast",
        dropdownItem: true
      },
      {
        id: uniqueId(),
        title: "Typography",
        icon: "solar:stop-circle-line-duotone",
        href: "/ui-components/typography",
        dropdownItem: true
      },
    ],
  },
  {
    id: uniqueId(),
    navlabel: true,
    subheader: "TABLES",
  },
  {
    id: uniqueId(),
    title: "Basic Tables",
    icon: 'solar:sidebar-code-line-duotone',
    href: "/tables/basic",
  },
  {
    id: uniqueId(),
    title: "Striped Rows Tables",
    icon: 'solar:sidebar-code-line-duotone',
    href: "/tables/striped-row",
  },
  {
    id: uniqueId(),
    title: "Hover Table",
    icon: 'solar:sidebar-code-line-duotone',
    href: "/tables/hover-table",
  },
  {
    id: uniqueId(),
    title: "Checkbox Table",
    icon: 'solar:sidebar-code-line-duotone',
    href: "/tables/checkbox-table",
  },
  {
    id: uniqueId(),
    navlabel: true,
    subheader: "FORMS",
  },
  {
    id: uniqueId(),
    title: "Forms Elements",
    icon: "solar:text-selection-line-duotone",
    href: "/forms/form-elements",
  },
  {
    id: uniqueId(),
    title: "Forms Layouts",
    icon: "solar:document-text-outline",
    href: "/forms/form-layouts",
  },
  {
    id: uniqueId(),
    title: "Forms Horizontal",
    icon: "solar:slider-horizontal-line-duotone",
    href: "/forms/form-horizontal",
  },
  {
    id: uniqueId(),
    title: "Forms Vertical",
    icon: "solar:slider-vertical-line-duotone",
    href: "/forms/form-vertical",
  },
  {
    id: uniqueId(),
    title: "Forms Custom",
    icon: "solar:document-text-outline",
    href: "/forms/form-custom",
  },
  {
    id: uniqueId(),
    title: "Form Validation",
    icon: "solar:bill-check-linear",
    href: "/forms/form-validation",
  },
  {
    id: uniqueId(),
    navlabel: true,
    subheader: "HEADLESS UI",
  },
  {
    id: uniqueId(),
    title: "UI Elements",
    icon: "solar:text-underline-cross-broken",
    href: "/ui-components/accordion",
    children: [
      {
        id: uniqueId(),
        title: "Dropdown",
        icon: "solar:stop-circle-line-duotone",
        href: "/headless-ui/dropdown",
        dropdownItem: true
      },
      {
        id: uniqueId(),
        title: "Disclosure",
        icon: "solar:stop-circle-line-duotone",
        href: "/headless-ui/disclosure",
        dropdownItem: true
      },
      {
        id: uniqueId(),
        title: "Dialog",
        icon: "solar:stop-circle-line-duotone",
        href: "/headless-ui/dialog",
        dropdownItem: true
      },
      {
        id: uniqueId(),
        title: "Popover",
        icon: "solar:stop-circle-line-duotone",
        href: "/headless-ui/popover",
        dropdownItem: true
      },
      {
        id: uniqueId(),
        title: "Tabs",
        icon: "solar:stop-circle-line-duotone",
        href: "/headless-ui/tabs",
        dropdownItem: true
      },
      {
        id: uniqueId(),
        title: "Transition",
        icon: "solar:stop-circle-line-duotone",
        href: "/headless-ui/transition",
        dropdownItem: true
      },

    ],
  },
  {
    id: uniqueId(),
    title: "Form Elements",
    icon: "solar:align-vertical-spacing-line-duotone",
    href: "/ui-components/accordion",
    children: [
      {
        id: uniqueId(),
        title: "Buttons",
        icon: "solar:stop-circle-line-duotone",
        href: "/headless-form/buttons",
        dropdownItem: true
      },
      {
        id: uniqueId(),
        title: "Checkbox",
        icon: "solar:stop-circle-line-duotone",
        href: "/headless-form/checkbox",
        dropdownItem: true
      },
      {
        id: uniqueId(),
        title: "Combobox",
        icon: "solar:stop-circle-line-duotone",
        href: "/headless-form/combobox",
        dropdownItem: true
      },
      {
        id: uniqueId(),
        title: "Fieldset",
        icon: "solar:stop-circle-line-duotone",
        href: "/headless-form/fieldset",
        dropdownItem: true
      },
      {
        id: uniqueId(),
        title: "Input",
        icon: "solar:stop-circle-line-duotone",
        href: "/headless-form/input",
        dropdownItem: true
      },
      {
        id: uniqueId(),
        title: "Listbox",
        icon: "solar:stop-circle-line-duotone",
        href: "/headless-form/listbox",
        dropdownItem: true
      },
      {
        id: uniqueId(),
        title: "Radio Group",
        icon: "solar:stop-circle-line-duotone",
        href: "/headless-form/radiogroup",
        dropdownItem: true
      },
      {
        id: uniqueId(),
        title: "Select",
        icon: "solar:stop-circle-line-duotone",
        href: "/headless-form/select",
        dropdownItem: true
      },
      {
        id: uniqueId(),
        title: "Switch",
        icon: "solar:stop-circle-line-duotone",
        href: "/headless-form/switch",
        dropdownItem: true
      },
      {
        id: uniqueId(),
        title: "Textarea",
        icon: "solar:stop-circle-line-duotone",
        href: "/headless-form/textarea",
        dropdownItem: true
      },
    ],
  },
  {
    id: uniqueId(),
    navlabel: true,
    subheader: "WIDGETS",
  },
  {
    id: uniqueId(),
    title: "Cards",
    icon: "solar:cardholder-line-duotone",
    href: "/widgets/cards",
  },
  {
    id: uniqueId(),
    title: "Banners",
    icon: "solar:align-vertical-spacing-line-duotone",
    href: "/widgets/banners",
  },
  {
    id: uniqueId(),
    title: "Charts",
    icon: "solar:chart-square-line-duotone",
    href: "/widgets/charts",
  },
  {
    id: uniqueId(),
    navlabel: true,
    subheader: "CHARTS",
  },
  {
    title: "Line Chart",
    icon: "solar:chart-square-line-duotone",
    id: uniqueId(),
    href: "/charts/line",
  },
  {
    title: "Area Chart",
    icon: "solar:graph-new-broken",
    id: uniqueId(),
    href: "/charts/area",
  },
  {
    title: "Gradient Chart",
    icon: "solar:round-graph-outline",
    id: uniqueId(),
    href: "/charts/gradient",
  },
  {
    title: "Candlestick",
    icon: "solar:chandelier-outline",
    id: uniqueId(),
    href: "/charts/candlestick",
  },
  {
    title: "Column",
    icon: "solar:chart-2-bold-duotone",
    id: uniqueId(),
    href: "/charts/column",
  },
  {
    
    title: "Doughnut & Pie",
    icon: "solar:pie-chart-2-linear",
    id: uniqueId(),
    href: "/charts/doughnut",
  },
  {
    title: "Radialbar & Radar",
    icon: "solar:graph-line-duotone",
    id: uniqueId(),
    href: "/charts/radialbar",
  },
  {
    id: uniqueId(),
    navlabel: true,
    subheader: "Icons",
  },
  {
    title: "Solar Icons",
    icon: "solar:ghost-smile-line-duotone",
    id: uniqueId(),
    href: "/icons/solar",
  },
  {
    title: "Tabler Icons",
    icon: "solar:sticker-smile-circle-2-linear",
    id: uniqueId(),
    href: "/icons/tabler",
  },
  {
    id: uniqueId(),
    navlabel: true,
    subheader: "AUTH",
  },
  {
    title: "Error",
    icon: "solar:bug-minimalistic-line-duotone",
    id: uniqueId(),
    href: "/auth/error",
  },
  {
    id: uniqueId(),
    title: "Login",
    icon: "solar:lock-keyhole-minimalistic-line-duotone",
    href: "/auth/auth1/login",
    children: [
      {
        title: "Side Login",
        icon: "solar:stop-circle-line-duotone",
        id: uniqueId(),
        href: "/auth/auth1/login",
        dropdownItem: true
      },
      {
        title: "Boxed Login",
        icon: "solar:stop-circle-line-duotone",
        id: uniqueId(),
        href: "/auth/auth2/login",
        dropdownItem: true
      },
    ]
  },
  {
    id: uniqueId(),
    title: "Register",
    icon: "solar:user-plus-rounded-line-duotone",
    href: "/auth/auth1/register",
    children: [
      {
        title: "Side Register",
        icon: "solar:stop-circle-line-duotone",
        id: uniqueId(),
        href: "/auth/auth1/register",
        dropdownItem: true
      },
      {
        title: "Boxed Register",
        icon: "solar:stop-circle-line-duotone",
        id: uniqueId(),
        href: "/auth/auth2/register",
        dropdownItem: true
      },
    ]
  },
  {
    id: uniqueId(),
    title: "Forgot Password",
    icon: "solar:password-minimalistic-input-line-duotone",
    href: "/auth/auth1/forgot-password",
    children: [
      {
        title: "Side Forgot Pwd",
        icon: "solar:stop-circle-line-duotone",
        id: uniqueId(),
        href: "/auth/auth1/forgot-password",
        dropdownItem: true
      },
      {
        title: "Boxed Forgot Pwd",
        icon: "solar:stop-circle-line-duotone",
        id: uniqueId(),
        href: "/auth/auth2/forgot-password",
        dropdownItem: true
      },
    ]
  },
  {
    id: uniqueId(),
    title: "Two Steps",
    icon: "solar:compass-big-line-duotone",
    href: "/auth/auth1/two-steps",
    children: [
      {
        title: "Side Two Steps",
        icon: "solar:stop-circle-line-duotone",
        id: uniqueId(),
        href: "/auth/auth1/two-steps",
        dropdownItem: true
      },
      {
        title: "Boxed Two Steps",
        icon: "solar:stop-circle-line-duotone",
        id: uniqueId(),
        href: "auth/auth2/two-steps",
        dropdownItem: true
      },
    ]
  },
  {
    title: "Maintenance",
    icon: "solar:calendar-minimalistic-line-duotone",
    id: uniqueId(),
    href: "/auth/maintenance",
  },

];

export default SidebarContent;
