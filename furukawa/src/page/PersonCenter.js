import {Layout} from "antd";
import Header from "../component/Header";

import Content from "../component/Content";
import PersonCenterNavigation from "../component/PersonCenterComponent/PersonCenterNavigation";
import Footer from "../component/Footer";


export default function PersonCenter(){

    return(
        <Layout className='Page-Layout'>
            <Header/>
            <Layout className='Main-Layout'>
                <PersonCenterNavigation/>
                <Content/>
            </Layout>
            <Footer/>
        </Layout>
    )
}