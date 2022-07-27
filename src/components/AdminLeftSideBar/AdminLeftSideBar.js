import React from "react"
import "./AdminLeftSideBar.scss"
import VerticalMenuElements from "./AdminLeftSideBarData.js"

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import { IconContext } from "react-icons";

export default function AdminLeftSideBar() {
    return (
        <div className="wrapper-vertical-menu">
            <div className="content-vertical-menu">
                <>
                    {
                        VerticalMenuElements.map((arr) => 
                            <SideBarIcon tooltip={arr.title} icon={arr.icon} />
                        )
                    }
                </>
            </div>
        </div>
    );
};

export const SideBarIcon = ({ icon, tooltip }) => {
    return (
        <OverlayTrigger offset={[0,20]} placement={"right"} overlay={
                <Tooltip>
                    <span className="sidebar-tooltip">{tooltip}</span>
                </Tooltip>
            }>
            <div aria-label="icons-div" className="sidebar-icon" >
                <IconContext.Provider value={{ color: "#B2B2B2", size: "2em"}}>
                    {icon}
                </IconContext.Provider>
            </div>
        </OverlayTrigger>
    );
};