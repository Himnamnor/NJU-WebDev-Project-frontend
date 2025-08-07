import {Form,Input,Button} from "antd";

export default function Register() {
    return (
        <Form
            name='Register'
            style={{
                width: 600,
                height: 800,
            }}
        >
            <Form.Item
                name='username'
                label='Username'
                rules={[{
                    required:true,
                    message: '用户名不能为空！'
                }]}
            >
                <Input placeholder='请输入用户名'/>
            </Form.Item>
            <Form.Item
                name='password'
                label='Password'
                rules={[{
                    required:true,
                    message: '密码不能为空！',
                }]}
            >
                <Input.Password/>
            </Form.Item>
            <Form.Item
                name
            >

            </Form.Item>
        </Form>
    )
}