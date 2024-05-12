import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Root = () => {


    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            {/* <div className="h-[500px]">

            </div> */}
            <Footer></Footer>
        </div>
    );
};

export default Root;