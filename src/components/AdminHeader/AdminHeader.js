import React from "react"
import "./AdminHeader.scss"
import LayoutSwitch from "../SwitchButton/SwitchViewButton.js"

export default function AdminHeader() {

    return (
        <header className="header">
            <nav className="header-navbar">
                <div className="navbar-logo">
                    <button className="button-sport-hub">
                        Sports Hub
                    </button>
                </div>
                <div className="navbar-switch">
                    <LayoutSwitch />
                </div>
                <div className="navbar-profile">Profile</div>
            </nav>
            <div className="header-page-name">
               Active configuration page name, CTA
            </div>
            <div className="header-horisontal-menu">
                Horisontal menu with static items
            </div>
        </header>
    );
}