import ActIntro from "./ActIntro";
import {Flex} from "antd";
import {useLocation} from "react-router-dom";


export default function Content(){

    const location=useLocation();
    const showAllActs=location.pathname==='/all-activities';
    const showPersonInfo=location.pathname==='/person-center/info'
    const showPersonReg=location.pathname==='/person-center/reg'

    return(
      <Flex
        wrap={true}
        gap="middle"
        justify='start'
        style={{height:'100%', width:'80%'}}
      >
          {showAllActs && <ActIntro/>}
      </Flex>
    )
}