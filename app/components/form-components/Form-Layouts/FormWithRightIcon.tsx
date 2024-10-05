import { IconUser, IconMail, IconLock } from "@tabler/icons-react";
import { Label, TextInput, Checkbox, Button } from "flowbite-react";
import React from "react";
import TitleCard from "../../shared/TitleBorderCard";

const FormWithRightIcon = () => {
  return (
    <div>
      <TitleCard title="Form with Right Icon">
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-12">
            <div className="mb-2 block">
              <Label htmlFor="username3" value="Username" />
            </div>
            <TextInput
              id="email4"
              type="email"
              rightIcon={() => <IconUser size={20} />}
              placeholder="name@materialm.com"
              required
              className="form-control"
            />
          </div>
          <div className="col-span-12">
            <div className="mb-2 block">
              <Label htmlFor="email4" value="Email" />
            </div>
            <TextInput
              id="email4"
              type="email"
              rightIcon={() => <IconMail size={20} />}
              placeholder="name@materialm.com"
              required
              className="form-control"
            />
          </div>
          <div className="col-span-12">
            <div className="mb-2 block">
              <Label htmlFor="password" value="Password" />
            </div>
            <TextInput
              id="password"
              type="password"
              rightIcon={() => <IconLock size={20} />}
              placeholder="Password"
              required
              className="form-control"
            />
          </div>
          <div className="col-span-12">
            <div className="mb-2 block">
              <Label htmlFor="confirmpassword" value="Confirm Password" />
            </div>
            <TextInput
              id="confirmpassword"
              type="password"
              rightIcon={() => <IconLock size={20} />}
              placeholder="Confirm Password"
              required
              className="form-control"
            />
          </div>
          <div className="flex items-center gap-2 col-span-12">
            <Checkbox className="checkbox" id="remember" />
            <Label htmlFor="remember">RememberMe!</Label>
          </div>
          <div className="col-span-12 flex items-center gap-[1rem]">
            <Button type="reset" color="error">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Submit
            </Button>
          </div>
        </div>
      </TitleCard>
    </div>
  );
};

export default FormWithRightIcon;