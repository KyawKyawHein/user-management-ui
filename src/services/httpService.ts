import axios from "axios";

export const userManagementService = axios.create({
    baseURL : "http://127.0.0.1:8000/api"
})

userManagementService.interceptors.request.use((config)=>{
    config.headers['Content-Type'] ="application/json";
    const token = localStorage.getItem('ACCESS_TOKEN');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})