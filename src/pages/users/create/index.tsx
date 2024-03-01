import Layout from "@/components/Layout";
import Button from "@/components/form/button/Button";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import CreateUserForm from "./component/CreateUserForm";
import RolesAndPermissionForm from "./component/RolesAndPermissionForm";
import MoreInformationForm from "./component/MoreInformationForm";
import { useRouter } from "next/navigation";

const CreatePage = () => {
  const router = useRouter()
  return (
    <Layout>
      <div className="w-full h-full">
        <div className="my-2">
          <Button
          onClick={()=>router.push('/users')}
            leftIcon={faArrowLeft}
            className="bg-transparent text-gray-400 hover:bg-gray-200"
          >
            Back
          </Button>
        </div>
        <CreateUserForm/>
        <RolesAndPermissionForm/>
        <MoreInformationForm/>
      </div>
    </Layout>
  );
};

export default CreatePage;
