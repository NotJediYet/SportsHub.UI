import './App.css';
import React from "react";
import {Route, Routes} from "react-router-dom";
import UserLayout from "./components/UserLayout/UserLayout";
import AdminLayout from "./components/AdminLayout/AdminLayout";
import {profilePagesRoutes} from "./components/ProfileMenu/ProfilePages.js"


export default function App(){
    return(
        <div>
            <Routes>
                <Route path={"/"} element={<UserLayout />} />
                {profilePagesRoutes}
                <Route path={"/admin"} element={<AdminLayout />} />
            </Routes>
        </div>
    )
}
