import {BarsOutlined} from "@ant-design/icons";
import {Divider, Menu} from "antd";

export default function Navigation(){

    const acts=[
        {
            key: '1-0',
            label:'全部活动',
        },
        {
            key: '1-1',
            label: '篮球'
        },
        {
            key:'1-2',
            label: '足球'
        },
        {
            key:'1-3',
            label: '羽毛球'
        },
        {
            key:'1-4',
            label: '乒乓球'
        },
        {
            key: '1-5',
            label: '慢跑'
        },
        {
            key: '1-6',
            label: '骑行'
        },
        {
            key:'1-7',
            label: '剧本杀'
        }
    ]

    const items=[
        {
            key: '1',
            label: '活动列表',
            children: acts||[]
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


    return (
        <div className="Navigation">
            <div style={{color:"white", fontSize:"30px" ,marginTop:"20px"}}>
                <BarsOutlined />
                <span style={{marginLeft:"8px"}}>导航栏</span>
            </div>
            <Divider style={{borderColor:"black",marginBottom:"0px"}}/>
            <Menu
                items={items}
                style={{width:"100%",height:"90%", fontSize:"18px"}}
                mode="inline"
                defaultSelectedKeys={['1-0']}
                defaultOpenKeys={['1']}
            />
        </div>
    )
}

