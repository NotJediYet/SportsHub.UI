import React from "react";
import './ProfileNavigation.scss'
import {NavLink, Outlet} from "react-router-dom";

export default function ProfileNavigation() {

    const personalInformationActive = ({isActive}) => isActive ? "personal-active" : "options-personal";
    const changePasswordActive = ({isActive}) => isActive ? "password-active"  : "options-change-password";
    const surveysOpenedActive = ({isActive}) => isActive ? "surveys-active" : "options-surveys";
    const teamHubActive = ({isActive}) => isActive ? "team-hub-active" : "options-team-hub";

    return (
        <div className={"profile-navigation-container"}>
            <span className={"options"}>
                <NavLink to={"personal-information"} className={personalInformationActive}>Personal</NavLink>
                <NavLink to={"change-password"} className={changePasswordActive} >Change password</NavLink>
                <NavLink to={"surveys"} className={surveysOpenedActive}>My surveys</NavLink>
                <NavLink to={"team-hub"} className={teamHubActive}>Team hub</NavLink>
            </span>
            <Outlet/>
        </div>

    );
}