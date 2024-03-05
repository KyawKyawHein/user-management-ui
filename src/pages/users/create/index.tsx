import Layout from "@/components/Layout";
import Button from "@/components/form/button/Button";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import CreateUserForm from "./component/CreateUserForm";
import RolesAndPermissionForm from "./component/RolesAndPermissionForm";
import MoreInformationForm from "./component/MoreInformationForm";
import Link from "next/link";
import useUserDetailStore from "@/store/userDetailStore";

const CreatePage = () => {
  const { name, setName, email, setEmail, isActive, setIsActive,password,setPassword } =
    useUserDetailStore();
    const [canClick,setCanClick] = useState(false)
    if(name.length<0 && email.length<0 && password.length<0){
      setCanClick(true)
    }
    const addUser = ()=>{
      if(!canClick) {
        return;
      }else{
        console.log('ya pr dl')
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
        <CreateUserForm
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          isActive={isActive}
          setIsActive={setIsActive}
        />
        <RolesAndPermissionForm password={password} setPassword={setPassword} />
        <MoreInformationForm />
        <div className={`flex justify-center items-center mt-6 mb-3`}>
          <Button onClick={addUser} className={`text-white ${!canClick && 'cursor-default'} `} disabled={canClick}>Create User Account</Button>
        </div>
      </div>
    </Layout>
  );
};

export default CreatePage;
