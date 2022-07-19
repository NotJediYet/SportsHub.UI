import React from "react"
import "./Header.css"

export default function Header() {
    return (
        <header className="header">
            <nav className="header--navbar">
                <a href="#" className="navbar--logo">Logo or identity</a>
                <div className="navbar--search">Search </div>
                <div className="navbar--social-media">Social media</div>
                <div className="navbar--profile">Profile</div>
                <div className="navbar--languages">Languages</div>
            </nav>
        </header>
    );
}