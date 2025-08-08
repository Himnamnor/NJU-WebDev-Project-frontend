import {Form, Input, Button, InputNumber, Select, Upload, message} from "antd";
import {LoadingOutlined, PlusOutlined, UserOutlined} from "@ant-design/icons";
import {useState} from "react";
import axiosInstance from "../util/axiosInstance";
import {Link, useNavigate} from "react-router-dom";


export default function Register() {
  const [loading, setLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type="button" disabled={imageLoading}>
      {imageLoading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  const onFinish=async (values)=>{
    if(loading) return;
    setLoading(true);
    if(!imageUrl) {
      console.error("请先上传头像");
      setLoading(false);
      return;
    }
    if (!values.avatar && imageUrl) {
      values.avatar = imageUrl;
    }
    try{
      await axiosInstance.post('/user/register',values);
      message.success("注册成功，即将跳转登录页面");
      form.resetFields();
      setTimeout(() => {
        navigate("/start/login");
      }, 2000);
    }catch(error){
      message.error("注册失败，请检查内容并重试");
    }finally {
      setLoading(false);
    }
  }

  const imgUpload=async ({file,onSuccess,onError})=>{
    setImageLoading(true);
    const formData=new FormData();
    formData.append('file',file);
    try{
      const res=await axiosInstance.post('/object',formData,{
        headers:{
          'contentType':'multipart/form-data',
        }
      });
      const url=res;
      if (!url) {
        throw new Error("未获取到上传后的 URL");
      }
      setImageUrl(url);
      form.setFieldsValue({ avatar: url });
      console.log('头像上传成功:', url);
      console.log(form.getFieldValue('avatar'));
      message.success("头像上传成功");
      onSuccess?.(res.data);
    }catch (error){
      message.error("头像上传失败，请重试");
      console.error('头像上传失败:', error);
      onError?.(error);
    }
    finally {
      setTimeout(()=>{
        setImageLoading(false);
      },100);
    }
  }

  return (
    <Form
      form={form}
      onFinish={onFinish}
      name='Register'
      style={{
        width: 600,
        height: 700,
        backgroundColor: 'rgba(255,255,255,0.85)',
        padding: '40px',
        borderRadius: '10px',
      }}
      initialValues={{role:'USER'}}
    >
      <Form.Item
        name='userName'
        label='用户名'
        rules={[{
          required:true,
          message: '用户名不能为空！'
        }]}
      >
        <Input placeholder='请输入用户名'/>
      </Form.Item>
      <Form.Item
        name='password'
        label='密码'
        rules={[{
          required:true,
          message: '密码不能为空！',
        }]}
      >
        <Input.Password placeholder='请输入密码'/>
      </Form.Item>
      <Form.Item
        name='phone'
        label='手机号'
        rules={[{
          required:true,
          message: '手机号不能为空！',
        }]}
      >
        <Input placeholder='请输入手机号'/>
      </Form.Item>
      <Form.Item
        name='location'
        label='地址'
        rules={[{
          required:false,
        }]}
      >
        <Input placeholder='请输入地址（可选）'/>
      </Form.Item>
      <Form.Item
        name='age'
        label='年龄'
        rules={[{
          required:true,
          message: '年龄不能为空！',
        }]}
      >
        <InputNumber placeholder='请输入年龄'
          suffix={<span>岁</span>}
                     min={7} max={99}
                     style={{width: 200}}
        />
      </Form.Item>
      <Form.Item
        name='height'
        label='身高'
        rules={[{
          required:true,
          message: '身高不能为空！',
        }]}
        suffix={
          <span>cm</span>
        }
      >
        <InputNumber placeholder='请输入身高'
                     suffix={
                       <span>cm</span>
                     }
                     min={120}
                     max={200}
                     style={{width: 200}}
        />
      </Form.Item>
      <Form.Item
        name='weight'
        label='体重'
        rules={[{
          required:true,
          message: '体重不能为空！',
        }]}
      >
        <InputNumber placeholder='请输入体重'
                     suffix={
                       <span>kg</span>
                     }
                     min={40}
                     max={120}
                     style={{width: 200}}
        />
      </Form.Item>
      <Form.Item
        name='role'
        label='身份'
        rules={[{
          required:true,
          message: '请选择你的身份！',
        }]}
      >
        <Select
          options={[
            {value: 'USER',label:'用户'},
            {value: 'ADMIN',label:'管理员'},
          ]}
          defaultValue={'USER'}
          style={{width: 200}}
        />
      </Form.Item>
      <Form.Item
        label='上传头像'
      >
        <Upload
          listType='picture-circle'
          className='avatar-uploader'
          showUploadList={false}
          customRequest={imgUpload}
        >
          {imageUrl?<img src={imageUrl} alt={imageUrl}
                         style={{width:'100%', objectFit:'cover', height:'100%'}}
          />:uploadButton}
        </Upload>

      </Form.Item>
      <Form.Item
        name='avatar'
        noStyle={true}
      >
        <Input type='hidden' />
      </Form.Item>
      <Form.Item>
        <Button block type="primary" htmlType="submit" loading={loading} disabled={loading}>
          {loading ? '注册中...' : '注册'}
        </Button>
        or <Link to="/start/login">登录</Link>
      </Form.Item>
    </Form>
  )
}