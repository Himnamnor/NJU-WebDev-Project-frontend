import {AlignLeftOutlined, BarsOutlined} from "@ant-design/icons";
import {Divider, Menu} from "antd";
import '../../App.css'
import Sider from "antd/es/layout/Sider";
import {useNavigate} from "react-router-dom";

export default function PersonCenterNavigation(){

    const navigate=useNavigate();

    const items=[
        {
            key: '1',
            label: '个人资料',
            onClick:()=>{
                navigate('/person-center/info')
            }
        },
        {
            key: '2',
            label: '我的活动',
            onClick:()=>{
                navigate('person-center/reg')
            }
        },{
            key:'3',
            label:'回到首页',
            onClick:()=>{
                navigate('/all-activities')
            }
        }
    ]

    const menuStyle = {
        width: '100%',
        height: '100%',
        fontSize:'18px',
        paddingLeft:'50px',
    };

    const siderStyle = {
        overflow: 'auto',
        height: '100%',
        position: 'sticky',
        insetInlineStart: 0,
        top: 0,
        bottom: 0,
        scrollbarWidth: 'thin',
        scrollbarGutter: 'stable',
        backgroundColor: '#3d79f2'
    }

    return (
        <Sider style={siderStyle} width="300px">
            <div style={{color:"white", fontSize:"30px" ,marginTop:"20px", padding: '0 50px'}}>
                <BarsOutlined />
                <span style={{marginLeft:"8px"}}>导航栏</span>
            </div>
            <Divider style={{borderColor:"black",marginBottom:"0px"}}/>
            <Menu
                items={items}
                style={menuStyle}
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['1']}
                inlineIndent={30}
            />
        </Sider>
    )
}

