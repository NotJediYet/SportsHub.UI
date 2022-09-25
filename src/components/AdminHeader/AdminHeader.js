import React from "react"
import "./AdminHeader.scss"
import LayoutSwitch from "../SwitchLayout/SwitchLayout.js"
import Profile from '../Profile/Profile';
import IAHeader from "../AdminContextAreaManagement/InformationArchitecture/IAComponents/IAHeader/IAHeader";
import {Link, Route, Routes} from "react-router-dom";
import HeaderTeams from "../AdminTeams/AdminTeamsComponents/HeaderTeams/HeaderTeams";

export default function AdminHeader() {

    return (
        <header className="header">
            <nav className="header-navbar">
                <div className="navbar-logo">
                    <button className="button-sport-hub">
                        <Link to="/admin">
                            Sports Hub
                        </Link>
                    </button>
                </div>
                <div className="navbar-divider"/>
                <div className="navbar-user-menu">
                    <div className="navbar-switch">
                        <LayoutSwitch />
                    </div>
                    <Profile />
                </div>
            </nav>
            <div className="header-page-name">
                <Routes>
                    <Route path={"information-architecture"} element={<IAHeader/>}/>
                    <Route path={"teams"} element={<HeaderTeams/>}/>
                </Routes>
            </div>
            <div className="header-horisontal-menu">
                Horisontal menu with static items
            </div>
        </header>
    );
}