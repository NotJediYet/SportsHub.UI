import React from "react"
import "./AdminContentArea.scss"
import AdminFiltersContentArea from "./AdminFiltersContentArea/AdminFiltersContentArea";


export default function AdminContentArea() {

    return (
        <div className="content-filter-area">
            <AdminFiltersContentArea />
        </div>
    );
}