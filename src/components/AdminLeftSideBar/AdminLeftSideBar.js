import React from "react"
import "./AdminLeftSideBar.scss"
import VerticalMenuElements from "./AdminLeftSideBarData.js"

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import { IconContext } from "react-icons";
import {Link} from "react-router-dom";

export default function AdminLeftSideBar() {
    return (
        <div className="wrapper-vertical-menu">
            <div className="content-vertical-menu">
                <>
                    {
                        VerticalMenuElements.map((arr,index) =>
                            <SideBarIcon key={index} tooltip={arr.title} icon={arr.icon} link={arr.link} />
                        )
                    }
                </>
            </div>
        </div>
    );
};

export const SideBarIcon = ({ icon, tooltip, link}) => {
    return (
        <OverlayTrigger offset={[0,20]} placement={"right"} overlay={
                <Tooltip>
                    <span className="sidebar-tooltip">{tooltip}</span>
                </Tooltip>
            }>

            <div className="sidebar-icon" >
                <Link to={link} aria-label="icons-div">
                    <IconContext.Provider value={{ color: "#B2B2B2", size: "2em"}}>
                        {icon}
                    </IconContext.Provider>
                </Link>
            </div>
        </OverlayTrigger>
    );
};