import React, { useContext } from "react";

import {
  IconMail,
  IconSend,
  IconBucket,
  IconFolder,
} from "@tabler/icons-react";
import ContactAdd from "./ContactAdd";
import {  HR, List,  } from "flowbite-react";
import { ContactContext } from '@/app/context/Conatactcontext/index';

interface DataType {
  id: number;
  name?: string | any;
  sort?: string;
  icon?: any;
  filterbyTitle?: string;
  devider?: boolean;
  color?: string;
}

const ContactFilter = () => {
  const { setSelectedDepartment, updateSearchTerm, selectedDepartment }: any = useContext(ContactContext);
  const filterData: DataType[] = [
    {
      id: 2,
      name: "All",
      sort: "show_all",
      icon: IconMail,
    },
    {
      id: 3,
      name: "Frequent",
      sort: "frequent_contact",
      icon: IconSend,
    },
    {
      id: 4,
      name: "Starred",
      sort: "starred_contact",
      icon: IconBucket,
    },
    {
      id: 6,
      devider: true,
    },
    {
      id: 5,
      filterbyTitle: "Categories",
    },

    {
      id: 7,
      name: "Engineering",
      sort: "engineering_department",
      icon: IconFolder,
      color: "primary",
    },
    {
      id: 8,
      name: "Support",
      sort: "support_department",
      icon: IconFolder,
      color: "error",
    },
    {
      id: 9,
      name: "Sales",
      sort: "sales_department",
      icon: IconFolder,
      color: "success",
    },
  ];

  const handleDepartmentClick = (department: string) => {
    setSelectedDepartment(department);
    updateSearchTerm('');
  };
  return (
    <>
      <div className="left-part max-w-[235px] h-full w-full ">
        <ContactAdd />
        <List className="my-4">
          {filterData.map((filter) => {
            if (filter.filterbyTitle) {
              return (
                <h6 className="uppercase text-xs pb-3" key={filter.id}>
                  {filter.filterbyTitle}
                </h6>
              );
            } else if (filter.devider) {
              return (
                <div className="my-4">
                  <HR key={filter.id} className="my-6" />
                </div>
              );
            }
            return (
              <List.Item key={filter.id}
                className={`py-[10px] gap-2 px-4 bg-hover rounded-md text-ld cursor-pointer ${selectedDepartment === filter.name ? "text-primary bg-lightprimary" : ""}`}
                icon={() => <filter.icon size={18} className={`text-${filter.color}`} />}
                onClick={() => handleDepartmentClick(filter.name)}
              >
                {filter.name}
              </List.Item>
            );
          })}
        </List>

      </div >
    </>
  );
};
export default ContactFilter;
