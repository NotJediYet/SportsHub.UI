import React from "react";
import HeaderUser from "./Header/HeaderUser"
import LeftSideBar from './LeftSideBar/LeftSideBar.js';
import {Outlet} from "react-router-dom";

export default function MainPage(){
    return(
        <div>
            <HeaderUser/>
            <LeftSideBar/>
            <Outlet/>
        </div>
    )
}


