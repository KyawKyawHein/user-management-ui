import Layout from '@/components/Layout';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import CreateUserForm from '../create/component/CreateUserForm';
import Button from '@/components/form/button/Button';
import { useParams, useRouter } from 'next/navigation';
import { useGetRoles, useGetUserDetailById, useUpdateUserById } from '@/queries/userManagement.api';
import useUserDetailStore from '@/store/userDetailStore';
import RolesAndPermissionForm from '../create/component/RolesAndPermissionForm';

const UserDetailPage = () => {
    const [disable,setDisable] = useState(false)
    const router = useRouter();
    const {id} = useParams();
    const {name,setName,email,setEmail,username,setUsername,password,setPassword,setIsActive,role,setRole,isActive}  = useUserDetailStore()
    const {data:userDetail,isLoading} = useGetUserDetailById(id)
    const {mutate:updateUserById} = useUpdateUserById()
    const {data:roles}= useGetRoles()
    useEffect(()=>{
        if(userDetail){
            setName(userDetail.name)
            setEmail(userDetail.email)
            setUsername(userDetail.username)
            setIsActive(userDetail.isActive)
            setRole(roles?.filter((role)=>role.name==userDetail.role)[0].id)
            setPassword('')
        }
    },[userDetail,roles])
    useEffect(()=>{
        if(name.length>0 && email.length>0 && password.length>=8 && username.length>0){
          setDisable(false)
        }else{
          setDisable(true)
        }
      },[name,email,password,username])
    const updateUser = ()=>{
        if(!disable) {
          const payload = {name,username,email,password,role_id:role,isActive:isActive=='true'?'true':'false'}
          console.log(payload)
          updateUserById({id:id,params:payload},
            {
              onSuccess:(data)=>{
                router.replace('/users')
              }
            }
            )
        }
      }
    return (
      <Layout title={"Edit user"}>
        <div className="w-full h-full">
          <div className="my-2">
            <Link
              href={"/users"}
              className="bg-transparent text-gray-400 hover:bg-gray-200"
            >
              Back
            </Link>
          </div>
          <CreateUserForm userDetail={userDetail}/>
          <RolesAndPermissionForm  />
          <div className={`flex justify-center items-center mt-6 mb-3`}>
            <Button onClick={updateUser} className={`text-white`} disabled={disable}>Update</Button>
          </div>
        </div>
      </Layout>
    );
}

export default UserDetailPage
