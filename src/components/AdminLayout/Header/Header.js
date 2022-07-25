import React from "react"
import "./Header.scss"
import SwitchViewButton from "./switch-view-button.js"

export default function Header() {
    return (
        <header className="header">
            <nav className="header--navbar">
                <div className="navbar--logo">
                    <button className="button-sport-hub">
                        Sports Hub
                    </button>
                </div>
                <div className="navbar--switch">
                    <SwitchViewButton tooltip={"Switch to user view"} />  
                </div>
                <div className="navbar--profile">Profile</div>
            </nav>
            <div className="header--page-name">
               Active configuration page name, CTA
            </div>
            <div className="header--horisontal-menu">
                Horisontal menu with static items
            </div>
        </header>
    );
}