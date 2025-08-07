import axiosInstance from "../util/AxiosInstance";


const user_id=localStorage.getItem("user_id");

export const getUserInfo=()=>{
    return axiosInstance.get(`/user/1`);
}

export const registerUser=(user)=>{
    return axiosInstance.post(`/user/register`,user);
}

export const login=(user)=>{
    const msg={
        userId:null,
        userName:user.userName,
        password:user.password,
        phone:null,
        location:null,
        age:null,
        height:null,
        weight:null,
        role:null,
    };
    return axiosInstance.post(`/user/login`,msg);
}

export const setUserInfo=(user)=>{
    return axiosInstance.put(`/user/${user_id}`,user);
}