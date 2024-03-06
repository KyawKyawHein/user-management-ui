import {create} from 'zustand'
import zukeeper from "zukeeper"

interface IUserDetail {
    name : string;
    username:string;
    email:string;
    password:string;
    address:string;
    role:number;
    birthdate : string;
    gender:string;
    phone:string;
    facebook_link:string;
    isActive:string;
    photo:string | null;
  }

  interface IUserDetailStore extends IUserDetail{
    setName :(name:string)=>void;
    setUsername : (username:string)=>void;
    setEmail : (email:string)=>void;
    setPassword : (password:string)=>void;
    setAddress : (address:string)=>void;
    setRole : (role:number)=>void;
    setBirthdate : (birthdate:string)=>void;
    setGender :(gender:string)=>void;
    setPhone :(phone:string)=>void;
    setFacebookLink : (facebookLink:string)=>void;
    setIsActive : (isActive:string)=>void;
    setPhoto : (photo:string)=>void;
  }
  

const useUserDetailStore = create<IUserDetailStore>(zukeeper((set)=>({
    name : "",
    username : "",
    email:'',
    password : "",
    address:"",
    role : 3,
    birthdate: "",
    gender: "",
    phone:"",
    facebook_link:"",
    isActive:"",
    photo:null,

    setName : (name:string)=>set({name:name}),
    setUsername : (username:string)=>set({username:username}),
    setEmail : (email:string)=>set({email:email}),
    setPassword : (password:string)=>set({password:password}),
    setAddress:(address:string)=>set({address:address}),
    setRole : (role:number)=>set({role:role}),
    setBirthdate : (birthdate:string)=>set({birthdate:birthdate}),
    setGender : (gender:string)=>set({gender:gender}),
    setPhone : (phone:string)=>set({phone:phone}),
    setFacebookLink : (facebookLink:string)=>set({facebook_link:facebookLink}),
    setIsActive : (isActive:string)=>set({isActive:isActive}),
    setPhoto : (photo:string)=>set({photo:photo})
})));

window.store = useUserDetailStore;
export default useUserDetailStore;