import React, { useContext } from "react";
import {
  IconMail,
  IconSend,
  IconFlag,
  IconTrash,
  IconStar,
  IconAlertCircle,
  IconFolder,
  IconNote,
} from "@tabler/icons-react";
import { HR, List } from "flowbite-react";
import EmailCompose from "./EmailCompose";
import { EmailContext } from '@/app/context/EmailContext/index'


interface fitlerType {
  id?: number;
  filterbyTitle?: string;
  icon?: any;
  name?: string;
  divider?: boolean;
  color?: string;
}
const EmailFilter = () => {
  const filterData: fitlerType[] = [
    {
      id: 2,
      name: "inbox",
      icon: IconMail,
    },
    {
      id: 3,
      name: "sent",
      icon: IconSend,
    },
    {
      id: 4,
      name: "draft",
      icon: IconNote,
    },
    {
      id: 4,
      name: "spam",
      icon: IconFlag,
    },
    {
      id: 5,
      name: "trash",
      icon: IconTrash,
    },
    {
      id: 6,
      divider: true,
    },
    {
      id: 1,
      filterbyTitle: "Sort By",
    },
    {
      id: 7,
      name: "starred",
      icon: IconStar,
    },
    {
      id: 8,
      name: "important",
      icon: IconAlertCircle,
    },
    {
      id: 9,
      divider: true,
    },
    {
      id: 13,
      filterbyTitle: "Labels",
    },
    {
      id: 10,
      name: "Promotional",
      icon: IconFolder,
      color: "primary",
    },
    {
      id: 11,
      name: "Social",
      icon: IconFolder,
      color: "error",
    },
    {
      id: 12,
      name: "Health",
      icon: IconFolder,
      color: "success",
    },
  ];


  const { setFilter, filter } = useContext(EmailContext);

  const handleFilterClick = (filterName: string | any) => {
    setFilter(filterName);
  };

  return (
    <>
      <div className="left-part max-w-[235px] h-full w-full ">
        <EmailCompose />
        <List className="my-4">
          {filterData.map((item) => {
            if (item.filterbyTitle) {
              return (
                <h6 className="uppercase text-xs pb-3" key={item.id}>
                  {item.filterbyTitle}
                </h6>
              );
            } else if (item.divider) {
              return (
                <div className="my-4">
                  <HR key={item.id} className="my-6" />
                </div>
              );
            }
            return (
              <List.Item
                key={item.id}
                className={`py-[10px] gap-2 px-4 bg-hover rounded-md text-ld cursor-pointer capitalize  ${filter === item.name ? "text-primary bg-lighthover dark:bg-darkbody" : ""}`}

                icon={() => (
                  <item.icon size={18} className={`text-${item.color}`} />
                )}
                onClick={() => handleFilterClick(item.name)}
              >
                {item.name}
              </List.Item>
            );
          })}
        </List>
      </div >
    </>
  );
};

export default EmailFilter;
