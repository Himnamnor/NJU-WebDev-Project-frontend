import ActIntro from "./ActIntro";
import {Flex} from "antd";


export default function Content(){
    return(
      <Flex
        wrap={true}
        gap="middle"
        justify='start'
        style={{height:'100%', width:'80%'}}
      >
          <ActIntro/>
      </Flex>
    )
}