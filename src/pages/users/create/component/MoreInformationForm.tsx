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
                required
              />
            </div>
            <div className="col-span-2">
              <Select data={gender} labelText="Gender" className="w-full" />
            </div>
            <div className="col-span-2">
              <Select data={marital} labelText="Gender" className="w-full" />
            </div>
            <div className="col-span-2">
              <Input labelText="Blood Group" placeholder="Blood Group" />
            </div>
          </div>
          <div className="grid grid-cols-8 gap-10 mt-5">
            <div className="col-span-2">
              <Input labelText="Phone" placeholder="## ### ####" />
            </div>
            <div className="col-span-2">
              <Input labelText="Contact Number" placeholder="## ### ####" />
            </div>
            <div className="col-span-2">
              <Input
                labelText="Family contact number"
                placeholder="## ### ####"
              />
            </div>
            <div className="col-span-2">
              <Input
                labelText="Facebook Link"
                placeholder="https://facebook.com/"
              />
            </div>
          </div>
          <div className="grid grid-cols-8 gap-10 mt-5">
            <div className="col-span-2">
              <Input
                labelText="Twitter Link"
                placeholder="https://twitter.com/"
              />
            </div>
            <div className="col-span-2">
              <Input labelText="Social Media 1" placeholder="Social media 1" />
            </div>
            <div className="col-span-2">
              <Input labelText="Social Media 2" placeholder="Social media 2" />
            </div>
            <div className="col-span-2">
              <Input labelText="Custom field 1" placeholder="Custom field 1" />
            </div>
          </div>
          <div className="grid grid-cols-8 gap-10 mt-5">
            <div className="col-span-2">
              <Input labelText="Custom field 2" placeholder="Custom field 2" />
            </div>
            <div className="col-span-2">
              <Input labelText="Custom field 3" placeholder="Custom field 3" />
            </div>
            <div className="col-span-2">
              <Input labelText="Custom field 4" placeholder="Custom field 4" />
            </div>
            <div className="col-span-2">
              <Input labelText="Guardian Name" placeholder="Guardian Name" />
            </div>
          </div>
          <div className="flex gap-10 mt-5">
            <div className="w-full">
              <Textarea labelText="Permanent Address" />
            </div>
            <div className="w-full">
              <Textarea labelText="Current Address" />
            </div>
          </div>
          <div className="w-full border-t mt-5"></div>
          <div className="w-full mt-5">
            <Input labelText="Bank Details" placeholder="Bank Details" />
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
