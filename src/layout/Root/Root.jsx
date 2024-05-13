import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {


    return (
        <div>
            <Navbar></Navbar>
            <div ><Outlet></Outlet></div>
            {/* <div className="h-[500px]">

            </div> */}
            <Footer></Footer>
            <Toaster></Toaster>
        </div>
    );
};

export default Root;