import './App.scss';
import React from "react";
import {Route, Routes} from "react-router-dom";
import UserLayout from "./components/UserLayout/UserLayout";
import AdminLayout from "./components/AdminLayout/AdminLayout";
import ProfileNavigation from "./components/ProfileManagement/ProfileNavigation/ProfileNavigation";
import UserContentArea from "./components/UserContentArea/UserContentArea";
import RequireAuth from "./components/RequireAuth/RequireAuth"
import {Toaster} from 'react-hot-toast';

export default function App(){
    return(
        <div>
            <Routes>
                <Route path={"/"} element={<UserLayout/>} >
                    <Route index element={<UserContentArea/>}/>
                    <Route element={<RequireAuth allowedRoles={["User", "Admin"]}/> }>
                        <Route path={"profile/*"} element={<ProfileNavigation/>}/>
                    </Route>
                </Route>
                <Route element={<RequireAuth allowedRoles={["Admin"]} /> }>
                    <Route path={"admin/*"} element={<AdminLayout />}/>
                </Route>
            </Routes>
            <Toaster position="top-right"  gutter={25}/>
        </div>
    )
}