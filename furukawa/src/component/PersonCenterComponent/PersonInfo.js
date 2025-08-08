import Content from "../Content";
import axiosInstance from "../../util/axiosInstance";
import {Descriptions, Image, Input} from "antd";

const user=await axiosInstance.get(`/user/${localStorage.getItem("user_id")}`);


export default function PersonInfo(){

    const [isEditing, setIsEditing] = useState(false);

    const items=[
        {
            key:'1',
            label:'用户名',
            children:isEditing?
                <Input
        }
    ]

    return (
        <Content>
            <Image src={user.avatar} alt={"头像"}
                   fallback="../../public/logo192.png"
                   width={80}
                   height={80}
                   style={{
                       borderRadius: '50%',
                       objectFit: 'cover',
                       border: '2px solid #ccc'
                   }}
            />
            <Descriptions

            />
        </Content>
    )
}