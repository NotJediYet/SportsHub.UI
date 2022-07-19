import React from "react";
import Footer from './Footer/Footer.js';
import RightSideBar from "./RightSideBar/RightSideBar";
import MainContentArea from "./MainContentArea/MainContentArea";

export default function MainContent (){
    return(
        <div>
            <Footer/>
            <RightSideBar/>
            <MainContentArea/>
        </div>
    )
}