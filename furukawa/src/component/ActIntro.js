import {Card} from "antd";
import Meta from "antd/es/card/Meta";


export default function ActIntro({ imageUrl, actName, actType }) {
    return (
        <Card
            hoverable
            cover={
                <img
                    alt="活动图片"
                    src={imageUrl}
                    className="ActImgStyle"
                />
            }
            className="ActCardStyle"
        >
            <Meta
                title={actName}
                description={actType}
            />
        </Card>
    );
}