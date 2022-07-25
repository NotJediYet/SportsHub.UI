import './App.scss';
import React from "react";
import {Route, Routes} from "react-router-dom";
import UserLayout from "./components/UserLayout/UserLayout";
import AdminLayout from "./components/AdminLayout/AdminLayout";

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
