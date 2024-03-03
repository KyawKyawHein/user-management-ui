import Button from "@/components/form/button/Button";
import DateInput from "@/components/form/input/DateInput";
import Input from "@/components/form/input/Input";
import Select from "@/components/form/input/Select";
import Textarea from "@/components/form/input/Textarea";
import React from "react";

const gender = [
  { name: "Male" },
  { name: "Female" },
  { name: "Rather not say" },
];
const marital = [
  { name: "Married" },
  { name: "Unmarried" },
  { name: "Divorced" },
];
const MoreInformationForm = () => {
  return (
    <>
      <div className="bg-white rounded-xl px-8 mt-5">
        <div className="pt-6">
          <h1 className="font-semibold text-xl text-gray-700">
            More Information
          </h1>
        </div>
        <div className="py-4">
          <div className="grid grid-cols-8 gap-10">
            <div className="col-span-2">
              <DateInput
                labelText="Date of birth"
                placeholder="Date of birth"
              />
            </div>
            <div className="col-span-2">
              <Select required={true} data={gender} labelText="Gender" className="w-full" />
            </div>
            <div className="col-span-2">
              <Input required={true} labelText="Phone" placeholder="## ### ####" />
            </div>
            <div className="col-span-2">
              <Input
                labelText="Facebook Link"
                placeholder="https://facebook.com/"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-6 mb-3">
        <Button className="text-white">Create User Account</Button>
      </div>
    </>
  );
};

export default MoreInformationForm;
