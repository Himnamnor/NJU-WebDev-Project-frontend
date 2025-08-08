import React,{useState} from "react";
import {Avatar,Button} from "antd";
import {getUserInfo} from "../api/User";
import {UserOutlined} from "@ant-design/icons";
import {useLocation} from "react-router-dom";
import HeaderPerson from "./HeaderPerson";

const user_id=localStorage.getItem("user_id");

export default function Header(){

    const location = useLocation();
    const isStartPage = location.pathname === '/start'||
                        location.pathname === '/start/login' ||
                        location.pathname === '/start/register';

    return(
      <div className="Header">
        <div style={{width:20}}/>
        <Avatar style={{backgroundColor:'#fde3cf',color:'#f56a00' ,fontSize:20}} size="large">Fu</Avatar>
        <span style={{fontSize: 25,marginLeft:10}}>古河体育活动室</span>
        {!isStartPage&&<HeaderPerson/>}
      </div>
    )
    
}