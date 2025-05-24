"use client";
import React, { useState } from "react";
import { Modal, Tooltip } from "flowbite-react";
import { IconCode } from "@tabler/icons-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"; // ✅ compatible con v5.8.0

const CodeModal = ({ children }: any) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div>
      <Tooltip content="Show Code" trigger="hover" className="whitespace-nowrap">
        <div className="group hover:bg-lightprimary hover:cursor-pointer p-2 rounded-full">
          <IconCode size={18} onClick={handleOpenModal} className="group-hover:text-primary" />
        </div>
      </Tooltip>

      <Modal show={openModal} onClose={handleOpenModal}>
        <Modal.Header className="rounded-t-md border-b border-ld">Sample Code</Modal.Header>
        <Modal.Body className="overflow-y-auto code-modal">
          <SyntaxHighlighter language="tsx" style={vscDarkPlus}>
            {children}
          </SyntaxHighlighter>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CodeModal;
