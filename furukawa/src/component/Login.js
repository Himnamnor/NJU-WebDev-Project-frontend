import {Form, Button, Input, Flex, Checkbox, message} from 'antd'
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {Link, useNavigate} from "react-router-dom";
import axiosInstance from "../util/axiosInstance";
import {useState} from "react";
export default function Login(){

    const [form]=Form.useForm();
    const [loading,setLoading]=useState(false);
    const navigate = useNavigate();

    const onFinish=async (values)=>{
        if(loading) return;
        setLoading(true);
        try{
            const res=await axiosInstance.post('/user/login',values);
            message.success("登录成功")
            form.resetFields();

            const user_id=res.userId;
            console.log(user_id);
            localStorage.setItem("user_id",user_id);

            setTimeout(()=>{
                navigate("/all-activities");
            },1000);
        }catch (error){
            message.error("登录失败，请检查用户名和密码");
        }finally {
            setLoading(false);
        }
    }

    return (
        <Form
            name="login"
            initialValues={{ remember: true }}
            style={{
                width:'600px',height:'400px',
                backgroundColor: 'rgba(255,255,255,0.85)',
                padding:'80px',
                borderRadius:'10px',
            }}
            onFinish={onFinish}
        >
            <Form.Item
                name="userName"
                rules={[{ required: true, message: '请输入用户名!' }]}
            >
                <Input prefix={<UserOutlined />} placeholder="用户名" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: '请输入密码' }]}
            >
                <Input.Password prefix={<LockOutlined />} type="password" placeholder="密码"  />
            </Form.Item>
            <Form.Item>
                <Flex justify="space-between" align="center">
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>记住我</Checkbox>
                    </Form.Item>
                </Flex>
            </Form.Item>
            <Form.Item>
                <Button block type="primary" htmlType="submit">
                    登录
                </Button>
                or <Link to='/start/register'>注册</Link>
            </Form.Item>
        </Form>
    )
}