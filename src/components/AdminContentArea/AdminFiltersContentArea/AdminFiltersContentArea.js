import React from "react"
import "./AdminFiltersContentArea.scss"
import AdminFilterContentArea from "../AdminFilterContentArea/AdminFilterContentArea"

const subcategoriesName = [
    { value: 'AFC East' },
    { value: 'AFC North' },
    { value: 'AFC South' },
    { value: 'AFC West' },
];

const teamsName = [
    { value: 'Team1' },
    { label: 'Team2' },
    { label: 'Team3' },
];

const articlesStatus = [
    { value: 'Published' },
    { value: 'Unpublished' },
];

function AdminFiltersContentArea()  {

    return (
        <div className="filters">
            <AdminFilterContentArea  defValue="All Subcategories" components ={subcategoriesName} />
            <AdminFilterContentArea  defValue="All Teams" components ={teamsName} />
            <AdminFilterContentArea  defValue="All" components ={articlesStatus} />
        </div>
    );
};

export default AdminFiltersContentArea;