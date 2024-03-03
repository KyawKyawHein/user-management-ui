import { getRolesService, getUsersService } from "@/services/usermanagement.service"
import { useQuery } from "@tanstack/react-query"

export const useGetUsers = ()=>{
    return useQuery<IGetUsersResponse>({
        queryKey : ['get','users'],
        queryFn : async()=>{
            let res = await getUsersService()
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