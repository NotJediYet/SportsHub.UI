import React from "react"
import "./UserLeftSideBar.scss"

export default function UserLeftSideBar() {
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