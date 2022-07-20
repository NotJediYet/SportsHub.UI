import './App.css';
import React from "react";
import {Route, Routes} from "react-router-dom";
import UserLayout from "./components/UserLayout/UserLayout";
import AdminLayout from "./components/AdminLayout/AdminLayout";
import {profilePagesRoutes} from "./components/ProfilePages/ProfilePages.js"
import PrimaryContentArea from "./components/PrimaryContentArea/PrimaryContentArea";
import SecondaryContentArea from "./components/SecondaryContentArea/SecondaryContentArea";
import AdditionalContentArea from "./components/AdditionalContentArea/AdditionalContentArea";
import RightSideBar from "./components/RightSideBar/RightSideBar";
import Footer from "./components/Footer/Footer";


export default function App(){
    return(
        <div>
            <Routes>
                <Route path={"/"} element={<UserLayout />} >
                    <Route index element={
                        <div><PrimaryContentArea />
                        <SecondaryContentArea />
                        <AdditionalContentArea />
                        <RightSideBar/>
                        <Footer/></div>}/>
                    {profilePagesRoutes}
                </Route>
                <Route path={"/admin"} element={<AdminLayout />} ></Route>
            </Routes>
        </div>
    )
}
