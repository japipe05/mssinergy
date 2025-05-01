import React from "react";
import CardBox from "../../shared/CardBox";
import { Field, Input, Label } from "@headlessui/react";
import RoundedInputCode from "./Codes/RoundedInputCode";
const RoundedInputWithLabel = () => {
  return (
    <div>
      <CardBox>
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-lg font-semibold">Rounded Input With Label</h4>
          <RoundedInputCode />
        </div>
        <Field className="w-full mb-3">
          <Label className="mb-2 block text-ld">Name</Label>
          <Input
            type="text"
            className="ui-form-control rounded-full py-2.5 px-3 w-full"
            name="full_name"
          />
        </Field>
        <Field className="w-full mb-3">
          <Label className="mb-2 block text-ld">Email</Label>
          <Input
            type="email"
            className="ui-form-control rounded-full py-2.5 px-3 w-full"
            name="full_name"
          />
        </Field>
        <Field className="w-full ">
          <Label className="mb-2 block text-ld">Password</Label>
          <Input
            type="password"
            className="ui-form-control rounded-full py-2.5 px-3 w-full"
            name="full_name"
          />
        </Field>
      </CardBox>
    </div>
  );
};

export default RoundedInputWithLabel;
