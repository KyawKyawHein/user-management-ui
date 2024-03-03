import Layout from "@/components/Layout";
import Button from "@/components/form/button/Button";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import CreateUserForm from "./component/CreateUserForm";
import RolesAndPermissionForm from "./component/RolesAndPermissionForm";
import MoreInformationForm from "./component/MoreInformationForm";
import Link from "next/link";


const CreatePage = () => {
  // const [user,setUser] = useState<User>({
  //   name : "",
  //   username : "",
  //   email:'',
  //   address:"",
  //   role : 0,
  //   birthdate: "",
  //   gender: "",
  //   phone:"",
  //   facebook_link:"",
  //   isActive:"",
  //   photo:null
  // })
  return (
    <Layout title={'Create user'}>
      <div className="w-full h-full">
        <div className="my-2">
          <Link
          href={'/users'}
            className="bg-transparent text-gray-400 hover:bg-gray-200"
          >
            Back
          </Link>
        </div>
        <CreateUserForm />
        {/* <RolesAndPermissionForm /> */}
        <MoreInformationForm/>
      </div>
    </Layout>
  );
};

export default CreatePage;
