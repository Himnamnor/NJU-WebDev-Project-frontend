import {BarsOutlined} from "@ant-design/icons";
import {Divider} from "antd";

export default function Navigation(){

    const acts=[
        {
            key:'1',
            label:'篮球',
        },
        {
            key:'2',
            label: '足球',
        },
        {

        }
    ]

    const items=[
        {
            key: '1',
            label: '活动列表',
            child:
        },
        {
            key: '2',
            label:'活动时间',
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
                <span>导航栏</span>
            </div>
            <Divider style={{borderColor:"black",}}/>

        </div>
    )
}

