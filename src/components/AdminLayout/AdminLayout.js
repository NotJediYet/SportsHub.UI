import React from "react"
import AdminHeader from '../AdminHeader/AdminHeader.js';
import AdminLeftSideBar from '../AdminLeftSideBar/AdminLeftSideBar.js'
import AdminContentArea from "../AdminContextAreaManagement/AdminContentArea/AdminContentArea";
import {Route, Routes} from "react-router-dom";
import InformationArchitecturePage from "../AdminContextAreaManagement/InformationArchitecture/InformationArchitecturePage";
import AdminTeamsLayout from "../AdminTeams/AdminTeamsLayout";
import LanguagesConfigurationPage from "../AdminContextAreaManagement/LanguagesConfiguration/LanguagesConfigurationPage.js";

export default function AdminLayout() {
    return (
        <div>
            <AdminHeader/>
            <AdminLeftSideBar/>
            <Routes>
                <Route index element={<AdminContentArea/>}/>
                <Route path={"information-architecture"} element={<InformationArchitecturePage/>}/>
                <Route path={"teams"} element={<AdminTeamsLayout/>}/>
                <Route path={"languages"} element={<LanguagesConfigurationPage/>}/>
            </Routes>
        </div>
    );
}

