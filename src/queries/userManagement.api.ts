import { createUserService, deleteUserService, getRolesService, getUserDetailById, getUsersService, updateUserById } from "@/services/usermanagement.service"
import { useMutation, useQuery } from "@tanstack/react-query"

interface IUserInfoPayload{
    name: string;
    username:string;
    email:string;
    password:string;
    role_id:number;
}
interface IUserId{
    id:number;
}

export const useGetUsers = ()=>{
    return useQuery<IGetUsersResponse>({
        queryKey : ['get','users'],
        queryFn : async()=>{
            let res = await getUsersService()
            return res;
        }
    })
}
export const useCreateUsers = ()=>{
    return useMutation({
        mutationFn : async(payload:IUserInfoPayload)=>{
            let res = await createUserService(payload);
            return res
        }
    })
}
export const useDeleteUser = ()=>{
    return useMutation({
        mutationFn : async(payload:IUserId)=>{
            let  res = await deleteUserService(payload);
            return res;
        }
    })
}
export const useGetUserDetailById = (id)=>{
    return useQuery({
        queryKey : ['get',id],
        queryFn :async()=>{
            let res = await getUserDetailById(id);
            return res;
        }
    })
}
export const useUpdateUserById = ()=>{
    return useMutation({
        mutationFn: async({id,params})=>{
            let res = await updateUserById(id,params)
            return res;
        }
    })
}

export const useGetRoles = ()=>{
    return useQuery<IGetRolesResponse>({
        queryKey: ['get','roles'],
        queryFn : async()=>{
            let res = await getRolesService()
            return res;
        }
    })
}