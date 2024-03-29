import React from "react"
import "./UserFooter.scss"

export default function UserFooter() {
    return (
        <footer className="footer">
            <nav className="footer-navbar-top">
            <div className="company-info">Company info</div>
            <div className="contributors">Contributors</div>
            <div className="newsletter">Newsletter</div>
            </nav>
            <nav className="footer-navbar-bottom">
                <a href="/#" className="footer--logo">Logo</a>
            </nav>
        </footer>
    );
}