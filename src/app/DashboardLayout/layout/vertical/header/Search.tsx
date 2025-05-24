"use client";
import { Button, Modal, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import * as SearchData from "./Data";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";



const Search = () => {
  const [openModal, setOpenModal] = useState(false);
  const [inputVal , setInputVal] = useState("");
  const [FilteredSearch , SetFilteredSearch] = useState(SearchData.SearchLinks)

  const handleInputValue = (e:React.ChangeEvent<HTMLInputElement>) => {
    let inputText = e.target.value;
    setInputVal(inputText);
    if(inputVal===""){
      SetFilteredSearch(SearchData.SearchLinks);
    }else{
      let filteredData = SearchData.SearchLinks.filter((link)=>{
       return link.href.includes(inputVal)
      });
      SetFilteredSearch(filteredData);
    }
  }

  return (
    <div>
      <button
        onClick={() => setOpenModal(true)}
        className="h-10 w-10 dark:text-darkmuted dark:hover:text-primary hover:text-primary hover:bg-lightprimary rounded-full flex justify-center items-center cursor-pointer"
      >
        <Icon icon="solar:magnifer-linear" height={21} />
      </button>

      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <div className="p-6 border-b border-ld">
          <TextInput placeholder="Search here" value={inputVal} onChange={handleInputValue} className="form-control" sizing="md" required />
        </div>
        <Modal.Body className="pt-0 "  >
          <SimpleBar className="max-h-72">
            <h5 className="text-lg pt-5">Quick Page Links</h5>
            {FilteredSearch.map((links, index) => {
              return (
                <Link href={links.href} className="py-1 px-3  group relative" key={index}>
                <h6 className="group-hover:text-primary mb-1 font-medium text-sm">
                  {links.title}
                </h6>
                <p className="text-xs text-link dark:text-darkmuted opacity-90 font-medium">
                  {links.href}
                </p>
              </Link>
              )
            })}
          </SimpleBar>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Search;
