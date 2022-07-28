import React from "react";
import './ProfileNavigation.scss'
import {NavLink, Outlet} from "react-router-dom";

export default function ProfileNavigation() {

    const personalActive = ({isActive}) => isActive ? "personal-active" : "options-personal";
    const passwordActive = ({isActive}) => isActive ? "password-active"  : "options-change-password";
    const surveysOpenedActive = ({isActive}) => isActive ? "surveys-active" : "options-surveys";
    const hubActive = ({isActive}) => isActive ? "team-hub-active" : "options-team-hub";


    return (
        <div className={"profile-menu-container"}>
            <span className={"options"}>
            <NavLink to={"personal"} className={personalActive}>Personal</NavLink>
            <NavLink to={"password"} className={passwordActive} >Change password</NavLink>
            <NavLink to={"surveys"} className={surveysOpenedActive}>My surveys</NavLink>
            <NavLink to={"teamhub"} className={hubActive}>Team hub</NavLink>
        </span>
            <Outlet/>
        </div>

    );
}