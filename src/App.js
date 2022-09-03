import './App.scss';
import React from "react";
import {Route, Routes} from "react-router-dom";
import UserLayout from "./components/UserLayout/UserLayout";
import AdminLayout from "./components/AdminLayout/AdminLayout";
import ProfileNavigation from "./components/ProfileManagement/ProfileNavigation/ProfileNavigation";
import PersonalInformation from "./components/ProfileManagement/PersonalInformation/PersonalInformation";
import ChangePassword from "./components/ProfileManagement/ChangePassword/ChangePassword";
import TeamHub from "./components/ProfileManagement/TeamHub/TeamHub";
import Surveys from "./components/ProfileManagement/Surveys/Surveys";
import UserContentArea from "./components/UserContentArea/UserContentArea";
import RequireAuth from "./components/RequireAuth/RequireAuth"

export default function App(){
    return(
        <div>
            <Routes>
                <Route path={"/"} element={<UserLayout/>} >
                    <Route index element={<UserContentArea/>}/>
                    <Route element={<RequireAuth allowedRoles={["User", "Admin"]}/> }>
                        <Route path={"profile"} element={<ProfileNavigation/>}>
                            <Route index element={<PersonalInformation/>}/>
                            <Route path={"change-password"} element={<ChangePassword/>}/>
                            <Route path={"surveys"} element={<Surveys/>}/>
                            <Route path={"team-hub"} element={<TeamHub/>}/>
                        </Route>
                    </Route>
                </Route>
                <Route element={<RequireAuth allowedRoles={["Admin"]} /> }>
                    <Route path={"admin/*"} element={<AdminLayout />} />
                </Route>
            </Routes>
        </div>
    )
}