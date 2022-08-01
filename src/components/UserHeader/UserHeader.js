import React from "react"
import "./UserHeader.scss"
import ProfileComponent from '../UserProfileComponents/ProfileComponent';

export default function UserHeader() {
    return (
        <header className="header-user">
            <nav className="header-navbar-user">
                <a href="/#" className="navbar-logo-user">Logo or identity</a>
                <div className="navbar-search-user">Search</div>
                <div className="navbar-social-media-user">Social media</div>
                <ProfileComponent/>
            </nav>
        </header>
    );
}