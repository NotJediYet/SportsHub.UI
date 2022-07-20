import React from "react";
import UserHeader from "../Header/UserHeader"
import LeftSideBar from '../LeftSideBar/LeftSideBar.js';
import {Outlet} from "react-router-dom";

export default function UserLayout(){
    return(
        <div>
            <UserHeader/>
            <LeftSideBar/>
            <Outlet/>
        </div>
    )
}

