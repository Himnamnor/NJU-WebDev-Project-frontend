import {Card} from "antd";
import Meta from "antd/es/card/Meta";

const imageUrl=" ";
const actName="南苏超级联赛";
const actType="足球";

export default function ActIntro() {
  return (
    <Card
      hoverable={true}
      cover={
        <img
          alt="活动图片"
          src={imageUrl}
          className='ActImgStyle'
        />
      }
      className='ActCardStyle'
    >
      <Meta
        title={actName}
        description={actType}
      />
    </Card>
  )
}