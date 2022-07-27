import React from "react"
import AdminHeader from '../AdminHeader/AdminHeader.js';
import AdminLeftSideBar from '../AdminLeftSideBar/AdminLeftSideBar.js'
import AdminContentArea from "../AdminContentArea/AdminContentArea";

export default function AdminLayout() {
    return (
        <div >
            <AdminHeader />
            <AdminLeftSideBar />
            <AdminContentArea />
        </div>
    );
}

