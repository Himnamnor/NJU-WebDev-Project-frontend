import React,{useState} from "react";
import {Avatar,Button} from "antd";
import {getUserInfo} from "../api/User";
import {UserOutlined} from "@ant-design/icons";

const user_id=localStorage.getItem("user_id");

export default function Header(){
    const user=getUserInfo(user_id);
    //获取其用户名用于头像和名称
    const  user_name="chenzuxi";

    return(
      <div className="Header">
        <div style={{width:20}}/>
        <Avatar style={{backgroundColor:'#fde3cf',color:'#f56a00' ,fontSize:20}} size="large">Fu</Avatar>
        <span style={{fontSize: 25,marginLeft:10}}>古河体育活动室</span>
        <span style={{marginLeft:"auto"}}>{user_name}</span>
        <div style={{width:20}}/>
        <Button icon={<UserOutlined/>}size="large" >个人中心</Button>
        <div style={{width:30}}/>
      </div>
    )
    
}