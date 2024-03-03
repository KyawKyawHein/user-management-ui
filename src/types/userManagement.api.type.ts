interface IGetUsersResponse {
    id : number;
    name : string;
    username : string;
    email : string;
    address : string;
    role : string;
    birthdate : string;
    gender : string;
    phone : string;
    facebook_link : string;
    isActive : string;
    photo : string | null;
}

interface IGetRolesResponse{
    id:number,
    name:string
}