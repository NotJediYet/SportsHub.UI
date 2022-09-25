import React from "react"
import AdminHeader from '../AdminHeader/AdminHeader.js';
import AdminLeftSideBar from '../AdminLeftSideBar/AdminLeftSideBar.js'
import {Route, Routes} from "react-router-dom";
import AdminContentArea from "../AdminContentArea/AdminContentArea";
import AdminTeamsLayout from "../AdminTeams/AdminTeamsLayout";

export default function AdminLayout() {
    return (
        <div>
            <AdminHeader />
            <AdminLeftSideBar />
            <Routes>
                <Route index element={<AdminContentArea/>}/>
                <Route path={"teams"} element={<AdminTeamsLayout/>}/>
            </Routes>
        </div>
    );
}

