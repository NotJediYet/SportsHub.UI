import React from "react";
import {Outlet, Route} from "react-router-dom";

import Header from './Main page/Header/Header.js';
import LeftSideBar from './Main page/LeftSideBar/LeftSideBar.js';

export default function MainPage(){
    return(
        <div>
            <Header/>
            <LeftSideBar/>
            <Outlet/>
        </div>
    )
}


