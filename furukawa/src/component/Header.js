import React,{useState} from "react";
import {Avatar,Button} from "antd";
import {getUserInfo} from "../api/User";

const user_id=localStorage.getItem("user_id");

function Header(){
    const user=getUserInfo(user_id);
    //获取其用户名用于头像和名称
    
}