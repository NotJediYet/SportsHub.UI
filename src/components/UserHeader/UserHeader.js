import React from "react"
import "./UserHeader.scss"
import LayoutSwitch from "../SwitchLayout/SwitchLayout.js"
import Profile from '../Profile/Profile';
import {useAuth0} from "@auth0/auth0-react";

export default function UserHeader() {
    let isAdminLoggedIn = false;
    const { user } = useAuth0();

    if (user) {
        const role = user['https://sportshub.com/roles'];
        role == 'User' ? isAdminLoggedIn = false : isAdminLoggedIn = true;
    }

    return (
        <header className="header-user">
            <nav className="header-navbar-user">
                <a href="/#" className="navbar-logo-user">Logo or identity</a>
                <div className="navbar-search-user">Search </div>
                <div className="navbar-social-media-user">Social media</div>
                { isAdminLoggedIn ? (
                <div className="navbar-switch">
                    <LayoutSwitch />
                </div>
                ): (
                    <div></div>
                )}
                <Profile/>
            </nav>
        </header>
    );
}