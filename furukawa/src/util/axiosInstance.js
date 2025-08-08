import axios from "axios";
import {message} from "antd";

const axiosInstance=axios.create({
  baseURL: 'http://localhost:8080/api',
  timeout: 5000,
});

axiosInstance.interceptors.request.use(
  (config)=>{
    const token=localStorage.getItem("authorization");
    if(token){
      config.headers['authorization']=token;
      //console.log('from requst token:', token);
    }
    //console.log(config);
    return config;
  },
  (error)=>{
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response)=>{

      //console.log(response);

      const token = response.headers['authorization'];
      if (token) {
         // console.log('current token: ',token);
          localStorage.setItem('authorization', token);
      }

    const res=response.data;
    if(res.code!==200){
      message.error(res.messages||"请求失败");
      return Promise.reject(new Error(res.messages||"请求失败"));
    }
    return res.data;
  },
  (error)=>{
    if(error.response){
      const data=error.response;
      const {dt,msg,code}=data;
      if(code===400){
        message.error(msg);
      }
      else if(code>=500){
        message.error("服务器错误，请稍后再试");
      }
      else{
        message.error("未知错误");
      }
    }
    return Promise.reject(error);
  }
)
export default axiosInstance;