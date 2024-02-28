import Breadcrumbs from '@/components/Breadcrumb'
import Input from '@/components/form/input/Input'
import Select from '@/components/form/input/Select'
import React from 'react'

const roles = [
    { name: "Administrator" },
    { name: "Cashier" },
    { name: "Store Keeper" },
  ];
  const accessLocation = [
      { name: "All Locations" },
      { name: "Yangon" },
      { name: "Mandalay" },
  ];
const defaultLocation = [{ name: "No Results Fount" }];
  
const RolesAndPermissionForm = () => {
  return (
    <div className="bg-white rounded-xl px-8 mt-5">
          <div className="pt-6">
            <h1 className="font-semibold text-xl text-gray-700">
              Roles and Permissions
            </h1>
          </div>
          <div className="py-4">
            <div className="mt-3">
              <Input required labelText="User Name" placeholder="User Name" />
            </div>
            <div className="grid grid-cols-2 gap-10">
              <div>
                <Input labelText="Password" placeholder="Password" />
                <p className="border-t-2 border-dashed mt-2 text-sm text-gray-300">
                  Use 8 or more characters with a mix of letters, numbers &
                  symbols
                </p>
              </div>
              <div>
                <Input
                  labelText="Confirm Password"
                  placeholder="Confirm Password"
                />
              </div>
            </div>
            <div className="mt-3">
              <Select
                data={roles}
                labelText="Roles"
                className="w-full"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-10 mb-5">
              <div>
                <Select
                  data={accessLocation}
                  labelText="Roles"
                  className="w-full"
                  required
                />
              </div>
              <div>
                <Select
                  data={defaultLocation}
                  labelText="Roles"
                  className="w-full"
                  required
                />
              </div>
            </div>
          </div>
        </div>
  )
}

export default RolesAndPermissionForm
