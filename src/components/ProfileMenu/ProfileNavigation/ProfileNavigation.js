import React from "react";
import './ProfileNavigation.scss'
import {NavLink, Outlet} from "react-router-dom";
import './ActiveButtons.scss'

export default function ProfileNavigation() {

    const personalActive = ({isActive}) => isActive ? "personalActive" : "options-personal";
    const passwordActive = ({isActive}) => isActive ? "passwordActive"  : "options-chngpass";
    const surveysOpenedActive = ({isActive}) => isActive ? "surveysActive" : "options-surveys";
    const hubActive = ({isActive}) => isActive ? "hubActive" : "options-teamHub";


    return (
        <div className={"profilepages-container"}>
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