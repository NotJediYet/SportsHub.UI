import React from "react"
import "./UserHeader.scss"
import LayoutSwitch from "../AdminHeader/switch-view-button.js.js.js"
import SwitchLayoutTooltip from "../SwitchLayout/layoutSwitchTooltip.js.js.js"

export default function UserHeader() {
    let isAdminLoggedIn = true;
    const switchLayoutClass = new SwitchLayoutTooltip();

    return (
        <header className="header-user">
            <nav className="header-navbar-user">
                <a href="/#" className="navbar-logo-user">Logo or identity</a>
                <div className="navbar-search-user">Search </div>
                <div className="navbar-social-media-user">Social media</div>
                { isAdminLoggedIn ? (
                <div className="navbar-switch">
                    <LayoutSwitch role={switchLayoutClass.roleUser()} />
                </div>
                ): (
                    <div></div>
                )}
                <div className="navbar-profile-user">Profile</div>
                <div className="navbar-languages-user">Languages</div>
            </nav>
        </header>
    );
}