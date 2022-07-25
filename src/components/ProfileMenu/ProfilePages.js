import React from "react";
import { Route } from "react-router-dom";
import ProfilePagesNav from "./ProfileMenuNav/ProfilePagesNav";
import ProfileInformation from "./ProfileInformation/ProfileInformation";
import ChangePassword from "./ChangePassword/ChangePassword"
import TeamHub from "./TeamHub/TeamHub"
import Surveys from "./Surveys/Surveys";
import UserHeader from "../Header/UserHeader"
import LeftSideBar from "../LeftSideBar/LeftSideBar"


export const profilePagesRoutes = (
        <Route path={"/profile"} element={
            <div>
                <UserHeader/>
                <LeftSideBar/>
                <ProfilePagesNav/>
            </div>
        }>
            <Route path={"personal"} element={<ProfileInformation/>}/>
            <Route path={"password"} element={<ChangePassword/>}/>
            <Route path={"surveys"} element={<Surveys/>}/>
            <Route path={"teamhub"} element={<TeamHub/>}/>
        </Route>
)

