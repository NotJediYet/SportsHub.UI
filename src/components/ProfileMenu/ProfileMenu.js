import React from "react";
import { Route } from "react-router-dom";
import ProfileNavigation from "./ProfileNavigation/ProfileNavigation";
import ProfileInformation from "./ProfileInformation/ProfileInformation";
import ChangePassword from "./ChangePassword/ChangePassword"
import TeamHub from "./TeamHub/TeamHub"
import Surveys from "./Surveys/Surveys";
import UserHeader from "../UserHeader/UserHeader"
import LeftSideBar from "../UserLeftSideBar/UserLeftSideBar"


export const profileMenuRoutes = (
        <Route path={"/profile"} element={
            <div>
                <UserHeader/>
                <LeftSideBar/>
                <ProfileNavigation/>
            </div>
        }>
            <Route path={"personal"} element={<ProfileInformation/>}/>
            <Route path={"password"} element={<ChangePassword/>}/>
            <Route path={"surveys"} element={<Surveys/>}/>
            <Route path={"teamhub"} element={<TeamHub/>}/>
        </Route>
)

