import React from "react"
import "./UserHeader.scss"
import LayoutSwitch from "../SwitchLayout/SwitchLayout.js"
import Profile from '../Profile/Profile';
import {useAuth0} from "@auth0/auth0-react";

export default function UserHeader() {
    let isAdminLoggedIn = false;
    const {user} = useAuth0();

    if (user) {
        const role = user['https://sportshub.com/roles'];
        role === 'User' ? isAdminLoggedIn = false : isAdminLoggedIn = true;
    }

    return (
        <div className="header">
            <nav className="header-navbar">
                <div className="navbar-logo">
                    <button className="button-sport-hub">
                        <a href="/">
                            Sports Hub
                        </a>
                    </button>
                </div>
                <div className="navbar-search">Search</div>
                <div className="navbar-divider"/>
                <div className="navbar-social-media">Social media</div>
                <div className="navbar-divider"/>
                <div className="navbar-user-menu">
                    { isAdminLoggedIn && (
                    <div className="navbar-switch">
                        <LayoutSwitch />
                    </div>
                    )}
                    <Profile/>
                </div>
            </nav>
        </div>
    );
}