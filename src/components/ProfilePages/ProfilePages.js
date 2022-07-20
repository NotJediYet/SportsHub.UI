import React from "react";
import { Route } from "react-router-dom";
import ProfilePagesNav from "./ProfilePagesNav/ProfilePagesNav";
import PersonalOption from "./PersonalOptionPages/PersonalOption";
import ChngPasswordPages from "./ChngPasswordPages/ChngPasswordPages"
import TeamHub from "./TeamHubPages/TeamHub"
import SurveysOptionOpened from "./SurveysOptionPages/SurveysOption";


export const profilePagesRoutes = (
        <Route path={"profile"} element={<ProfilePagesNav/>}>
            <Route path={"personal"} element={<PersonalOption/>}/>
            <Route path={"password"} element={<ChngPasswordPages/>}/>
            <Route path={"surveys"} element={<SurveysOptionOpened/>}/>
            <Route path={"teamhub"} element={<TeamHub/>}/>
        </Route>
)

