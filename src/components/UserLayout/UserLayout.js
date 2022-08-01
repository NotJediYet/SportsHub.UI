import React from "react";
import UserHeader from "../UserHeader/UserHeader"
import UserLeftSideBar from '../UserLeftSideBar/UserLeftSideBar.js';
import {Outlet} from "react-router-dom"

export default function UserLayout(){
    return(
        <div>
            <UserHeader/>
            <UserLeftSideBar/>
            <Outlet/>
        </div>
    )
}


