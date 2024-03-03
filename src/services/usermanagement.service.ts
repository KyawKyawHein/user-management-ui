import { userManagementService } from "./httpService"

export const getUsersService = async()=>{
    let result = await userManagementService.get('/users');
    return result.data;
}

export const getRolesService = async()=>{
    let result = await userManagementService.get('/roles');
    return result.data;
}