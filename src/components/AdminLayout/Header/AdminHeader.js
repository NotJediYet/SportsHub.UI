import React from "react"
import "./AdminHeader.scss"
import LayoutSwitch from "./switch-view-button.js"
import SwitchLayoutTooltip from "./layoutSwitchTooltip.js";

export default function AdminHeader() {
    const switchLayoutClass = new SwitchLayoutTooltip();

    return (
        <header className="header">
            <nav className="header-navbar">
                <div className="navbar-logo">
                    <button className="button-sport-hub">
                        Sports Hub
                    </button>
                </div>
                <div className="navbar-switch">
                    <LayoutSwitch role={switchLayoutClass.roleAdmin()} />
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