import {Layout} from "antd";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Login from "../component/Login";
import Register from "../component/Register";
import {Outlet} from "react-router-dom";

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
              <Outlet/>
            </div>
            <Footer/>
        </Layout>
    )
}