import {Layout} from "antd";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Login from "../component/Login";

export default function StartPage(){
    return (
        <Layout className='Page-Layout'>
            <Header/>
            <div
                style={{
                    height:'100%',
                    width:'100%',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    backgroundImage:`url('/bg1.jpg')`,
                    backgroundSize:'cover',
                    backgroundPosition: 'center',
                }}
            >
                <Login/>
            </div>
            <Footer/>
        </Layout>
    )
}