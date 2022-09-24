import React from "react"
import "./AdminHeader.scss"
import LayoutSwitch from "../SwitchLayout/SwitchLayout.js"
import Profile from '../Profile/Profile';
import IAHeader from "../AdminContextAreaManagement/InformationArchitecture/IAComponents/IAHeader/IAHeader";
import {Route, Routes} from "react-router-dom";

export default function AdminHeader() {

    return (
        <header className="header">
            <nav className="header-navbar">
                <div className="navbar-logo">
                    <button className="button-sport-hub">
                        <a href="/admin">
                            Sports Hub
                        </a>
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
                </Routes>
            </div>
            <div className="header-horisontal-menu">
                Horisontal menu with static items
            </div>
        </header>
    );
}