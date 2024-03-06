import Layout from "@/components/Layout";
import Button from "@/components/form/button/Button";
import React, { useEffect, useState } from "react";
import CreateUserForm from "./component/CreateUserForm";
import RolesAndPermissionForm from "./component/RolesAndPermissionForm";
import Link from "next/link";
import useUserDetailStore from "@/store/userDetailStore";
import { useCreateUsers } from "@/queries/userManagement.api";
import { useRouter } from "next/navigation";

const CreatePage = () => {
  const {mutate:createUser,isLoading} = useCreateUsers()
  const router = useRouter();
  const { name, email, isActive,password,username,role,setName,setEmail,setIsActive,setPassword,setUsername,setRole } =
    useUserDetailStore();
    useEffect(()=>{
      setName('')
      setEmail('')
      setIsActive('')
      setPassword('')
      setUsername('')
      setRole(3)
    },[])
    const [disable,setDisable] = useState(true)
    useEffect(()=>{
      if(name.length>0 && email.length>0 && password.length>=8 && username.length>0){
        setDisable(false)
      }else{
        setDisable(true)
      }
    },[name,email,password,username,role])
    
    const addUser = ()=>{
      if(!disable) {
        const payload = {name,username,email,password,role_id:role,isActive:isActive?'true':'false'}
        createUser(payload,
          {
            onSuccess:(data)=>{
              router.replace('/users')
            }
          }
          )
      }
    }
  return (
    <Layout title={"Create user"}>
      <div className="w-full h-full">
        <div className="my-2">
          <Link
            href={"/users"}
            className="bg-transparent text-gray-400 hover:bg-gray-200"
          >
            Back
          </Link>
        </div>
        <CreateUserForm/>
        <RolesAndPermissionForm />
        <div className={`flex justify-center items-center mt-6 mb-3`}>
          <Button onClick={addUser} className={`text-white`} disabled={disable}>{isLoading ? 'Loading':'Create User Account'}</Button>
        </div>
      </div>
    </Layout>
  );
};

export default CreatePage;
