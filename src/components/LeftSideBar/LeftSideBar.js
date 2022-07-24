import React from "react"
import "./LeftSideBar.css"

export default function LeftSideBar() {
    return (
        <>
            <div className="left-sidebar-menu">
                <ul className="left-sidebar-list-style">
                    <li>List of menu items</li>
                </ul>
            </div>

            <div className="left-sidebar-icons">
                Icons: fb, G, twitter, youtube
            </div>
        </>

    )
}