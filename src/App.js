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


export default function App(){
    return(
        <div>
            <Routes>
                <Route path={"/"} element={<UserLayout/>} >
                    <Route index element={<UserContentArea/>}/>
                    <Route path={"profile"} element={<ProfileNavigation/>}>
                        <Route path={"personal-information"} element={<PersonalInformation/>}/>
                        <Route path={"change-password"} element={<ChangePassword/>}/>
                        <Route path={"surveys"} element={<Surveys/>}/>
                        <Route path={"team-hub"} element={<TeamHub/>}/>
                    </Route>
                </Route>
                <Route path={"/admin"} element={<AdminLayout />} />
            </Routes>
        </div>
    )
}
