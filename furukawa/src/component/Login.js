import {Form, Button, Input, Flex, Checkbox} from 'antd'
import {LockOutlined, UserOutlined} from "@ant-design/icons";

export default function Login(){
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
        >
            <Form.Item
                name="username"
                rules={[{ required: true, message: '请输入用户名!' }]}
            >
                <Input prefix={<UserOutlined />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: '请输入密码' }]}
            >
                <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
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
                or <a href="" >注册</a>
            </Form.Item>
        </Form>
    )
}