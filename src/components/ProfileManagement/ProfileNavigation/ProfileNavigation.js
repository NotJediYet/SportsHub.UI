import React from "react";
import './ProfileNavigation.scss'
import {NavLink, Route, Routes} from "react-router-dom";
import PersonalInformation from "../PersonalInformation/PersonalInformation";
import ChangePassword from "../ChangePassword/ChangePassword";
import Surveys from "../Surveys/Surveys";
import TeamHub from "../TeamHub/TeamHub";

export default function ProfileNavigation() {
    const personalInformationActive = ({isActive}) => isActive ? "personal-active" : "options-personal";
    const changePasswordActive = ({isActive}) => isActive ? "password-active"  : "options-change-password";
    const surveysOpenedActive = ({isActive}) => isActive ? "surveys-active" : "options-surveys";
    const teamHubActive = ({isActive}) => isActive ? "team-hub-active" : "options-team-hub";

    return (
        <div className={"profile-navigation-container"}>
            <span className={"options"}>
                <NavLink end to={""} className={personalInformationActive}>Personal</NavLink>
                <NavLink to={"change-password"} className={changePasswordActive} >Change password</NavLink>
                <NavLink to={"surveys"} className={surveysOpenedActive}>My surveys</NavLink>
                <NavLink to={"team-hub"} className={teamHubActive}>Team hub</NavLink>
            </span>
            <Routes>
                <Route index element={<PersonalInformation/>}/>
                <Route path={"change-password"} element={<ChangePassword/>}/>
                <Route path={"surveys"} element={<Surveys/>}/>
                <Route path={"team-hub"} element={<TeamHub/>}/>
            </Routes>
        </div>
    );
}