import React from "react";
import HeaderUser from "../Header/HeaderUser"
import LeftSideBar from '../LeftSideBar/LeftSideBar.js';
import Footer from "../Footer/Footer";
import RightSideBar from "../RightSideBar/RightSideBar";
import PrimaryContentArea from "../PrimaryContentArea/PrimaryContentArea";
import SecondaryContentArea from "../SecondaryContentArea/SecondaryContentArea";
import AdditionalContentArea from "../AdditionalContentArea/AdditionalContentArea";

export default function UserLayout(){
    return(
        <div>
            <HeaderUser/>
            <PrimaryContentArea />
            <SecondaryContentArea />
            <AdditionalContentArea />
            <LeftSideBar/>
            <RightSideBar/>
            <Footer/>
        </div>
    )
}


