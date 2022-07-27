import './App.scss';
import React from "react";
import {Route, Routes} from "react-router-dom";
import UserLayout from "./components/UserLayout/UserLayout.js";
import AdminLayout from "./components/AdminLayout/AdminLayout.js";

export default function App(){
    return(
        <div>
            <Routes>
                <Route path={"/"} element={<UserLayout />} ></Route>
                <Route path={"/admin"} element={<AdminLayout />} ></Route>
            </Routes>
        </div>
    )
}
