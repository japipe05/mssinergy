import { Button, Label, TextInput } from "flowbite-react";
import Link from "next/link";
import React from "react";

const AuthTwoSteps = () => {
  return (
    <>
      <form className="mt-6">
        <div className="mb-4">
          <div className="mb-2 block">
            <Label value="Type your 6 digits security code" />
          </div>
          <div className="flex gap-3.5">
            <TextInput type="text" sizing="md" className="form-control input-center" />
            <TextInput type="text" sizing="md" className="form-control input-center" />
            <TextInput type="text" sizing="md" className="form-control input-center" />
            <TextInput type="text" sizing="md" className="form-control input-center" />
            <TextInput type="text" sizing="md" className="form-control input-center" />
            <TextInput type="text" sizing="md" className="form-control input-center" />
          </div>
        </div>
        <Button color={"primary"} className="w-full bg-primary hover:bg-primaryemphasis text-white">
          Verify My Account
        </Button>
        <p className="flex items-center justify-start gap-1 text-dark dark:text-white text-base mt-4 font-medium" >
        Didn't get the code? <Link href='/' className="text-primary text-sm hover:text-primaryemphasis" >Resend</Link>
        </p>
      </form>
    </>
  );
};

export default AuthTwoSteps;
