import Breadcrumbs from '@/components/Breadcrumb'
import Input from '@/components/form/input/Input'
import Select from '@/components/form/input/Select'
import { useGetRoles } from '@/queries/userManagement.api'
import useUserDetailStore from '@/store/userDetailStore'
import React from 'react'
  
const RolesAndPermissionForm = () => {
  const {username,setUsername,setName,password,setPassword,role,setRole} = useUserDetailStore()
    const {data:roles,isLoading} = useGetRoles();
  return (
    <div className="bg-white rounded-xl px-8 mt-5">
          <div className="pt-6">
            <h1 className="font-semibold text-xl text-gray-700">
              Roles and Permissions
            </h1>
          </div>
          <div className="py-4">
            <div className="mt-3">
              <Input required labelText="User Name" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="User Name" />
            </div>
            <div className=" gap-10">
              <div>
                <Input min={8} labelText="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required placeholder="Password" />
                {
                  password.length<8 && 
                  <p className="border-t-2 border-dashed mt-2 text-sm text-red-500 font-bold">
                    Use 8 or more characters 
                </p>
                }
              </div>
            </div>
            <div className="mt-3">
             {
              !isLoading &&  <Select
              data={roles}
              role = {role}
              setRole = {setRole}
              labelText="Roles"
              className="w-full"
              required
            />
             }
            </div>
          </div>
        </div>
  )
}

export default RolesAndPermissionForm
