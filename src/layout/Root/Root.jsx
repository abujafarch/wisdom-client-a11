import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";

const Root = () => {


    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            {/* <div className="h-[500px]">

            </div> */}
        </div>
    );
};

export default Root;