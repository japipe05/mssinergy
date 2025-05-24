"use client";
import CardBox from "@/app/components/shared/CardBox";
import { Label, TextInput } from "flowbite-react";
import React, { useState } from "react";

import dynamic from "next/dynamic";
import "quill/dist/quill.snow.css"; // ✅ Esta es la ruta correcta con react-quill v2+

const ReactQuill: any = dynamic(
  async () => {
    const { default: RQ } = await import("react-quill");
    // eslint-disable-next-line react/display-name
    return ({ ...props }) => <RQ {...props} />;
  },
  {
    ssr: false,
  }
);

const GeneralDetail = () => {
  const [text, setText] = useState("");
  return (
    <>
      <CardBox>
        <h5 className="card-title font-semibold mb-4">General</h5>
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="prednm" value="Product Name" />
            <span className="text-error ms-1">*</span>
          </div>
          <TextInput
            id="prednm"
            type="text"
            sizing="md"
            className="form-control"
            placeholder="Product Name"
          />
          <small className="text-xs text-bodyclr dark:text-darkmuted">
            A product name is required and recommended to be unique.
          </small>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="desc" value="Description" />
          </div>
          <ReactQuill
            value={text}
            onChange={(value: any) => {
              setText(value);
            }}
          />
          <small className="text-xs text-bodyclr dark:text-darkmuted">
            Set a description to the product for better visibility.
          </small>
        </div>
      </CardBox>
    </>
  );
};

export default GeneralDetail;
