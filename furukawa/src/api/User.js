import axios from "axios";

const api=axios.create({
    baseURL:"http://localhost:8080/api/user",
    timeout:5000,
})

const user_id=localStorage.getItem("user_id");

export const getUserInfo=(user_id)=>{
    return api.get("/${user_id}")
}