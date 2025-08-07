import {AlignLeftOutlined, BarsOutlined} from "@ant-design/icons";
import {Divider, Menu} from "antd";
import '../App.css'
import Sider from "antd/es/layout/Sider";

export default function Navigation(){

    const acts=[
        {
            key: '1-0',
            label:'全部活动',
        },
        {
            key: '1-1',
            label: '篮球',

        },
        {
            key:'1-2',
            label: '足球',

        },
        {
            key:'1-3',
            label: '羽毛球',

        },
        {
            key:'1-4',
            label: '乒乓球',

        },
        {
            key: '1-5',
            label: '慢跑',

        },
        {
            key: '1-6',
            label: '骑行',

        },
        {
            key:'1-7',
            label: '剧本杀',

        }
    ]

    const items=[
        {
            key: '1',
            label: '活动列表',
            children: acts||[],
        },
        {
            key: '2',
            label:'活动时间',

            children: [
                {
                    key:'2-0',
                    label:'全部时间'
                },
                {
                    key:'2-1',
                    label:'三天内'
                },
                {
                    key:'2-2',
                    label:'一周内'
                },
                {
                    key:'2-3',
                    label: '一个月内'
                }
            ]
        },
        {
            key: '3',
            label: '我的活动',
        },
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
                defaultSelectedKeys={['1-0']}
                defaultOpenKeys={['1']}
                inlineIndent={30}
            />
        </Sider>
    )
}

