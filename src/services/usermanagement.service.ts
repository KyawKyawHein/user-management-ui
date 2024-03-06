import { userManagementService } from "./httpService"

export const getUsersService = async()=>{
    let result = await userManagementService.get('/users');
    return result.data;
}
export const createUserService = async(params)=>{
    let result = await userManagementService.post("/users",params);
    return result.data;
}
export const deleteUserService = async(id)=>{
    let result = await userManagementService.delete(`/users/${id}`);
    return result.data;
}
export const getUserDetailById = async(id)=>{
    let result = await userManagementService.get(`/users/${id}`);
    return result.data;
}
export const updateUserById = async(id,params)=>{
    let result = await userManagementService.put(`/users/${id}`,params);
    return result.data;
}

export const getRolesService = async()=>{
    let result = await userManagementService.get('/roles');
    return result.data;
}
