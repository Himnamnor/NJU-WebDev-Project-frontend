import {Button} from "antd";
import {UserOutlined} from "@ant-design/icons";
import React from "react";
import axiosInstance from "../util/axiosInstance";
import {useNavigate} from "react-router-dom";

const user=await axiosInstance.get(`/user/${localStorage.getItem("user_id")}`);

export default function HeaderPerson(){

    const user_name=user.userName;
    const navigate=useNavigate();
    const onClick=()=>{
        navigate("/person-center");
    }

    return(
    <>
        <span style={{marginLeft:"auto"}}>{user_name}</span>
        <div style={{width:20}}/>
        <Button icon={<UserOutlined/> }size="large" onClick={onClick} >个人中心</Button>
        <div style={{width:30}}/>
    </>
    );
}