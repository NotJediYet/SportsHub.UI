import './App.scss';
import React from "react";
import {Route, Routes} from "react-router-dom";
import UserLayout from "./components/UserLayout/UserLayout";
import AdminLayout from "./components/AdminLayout/AdminLayout";
import {profileMenuRoutes} from "./components/ProfileMenu/ProfileMenu.js"


export default function App(){
    return(
        <div>
            <Routes>
                <Route path={"/"} element={<UserLayout />} />
                {profileMenuRoutes}
                <Route path={"/admin"} element={<AdminLayout />} />
            </Routes>
        </div>
    )
}
