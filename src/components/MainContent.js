import React from "react";
import {Outlet, Route} from "react-router-dom";


import Footer from './Main page/Footer/Footer.js';
import RightSideBar from "./Main page/RightSideBar/RightSideBar";
import MainContentArea from "./Main page/MainContentArea/MainContentArea";


export default function MainContent (){
    return(
        <div>
            <Footer/>
            <RightSideBar/>
            <MainContentArea/>
        </div>
    )
}