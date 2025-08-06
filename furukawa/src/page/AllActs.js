import Header from "../component/Header";
import Footer from "../component/Footer";
import {Layout} from "antd";
import Content from "../component/Content";
import Navigation from "../component/Navigation";

export default function AllActs() {
    return(
        <Layout className="Page-Layout">
            <Header/>
            <Layout className="Main-Layout">
                <Navigation>导航栏</Navigation>
                <Content/>
            </Layout>
            <Footer/>
        </Layout>
    )
}