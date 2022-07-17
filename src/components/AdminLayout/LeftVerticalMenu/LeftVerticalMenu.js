import React from "react"
import "./LeftVerticalMenu.css"

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { IconContext } from "react-icons";
import { BiMessageCheck, BiGlobe, BiShareAlt, BiCollection, BiBriefcase } from 'react-icons/bi';
import { RiFileList2Line, RiLayoutBottomLine, RiOrganizationChart } from 'react-icons/ri';
import { MdOutlinePeopleAlt } from 'react-icons/md';

export default function LeftVerticalMenu() {
    return (
        <div className="wrapper-vertical-menu">
            <div className="content-vertical-menu">
                <SideBarIcon tooltip={<span className="sidebar-tooltip">Surveys</span>} icon={
                    <IconContext.Provider class="icons-color" value={{ color: "#B2B2B2", size: "2em"}}>
                        <BiMessageCheck/>
                    </IconContext.Provider>
                } />
                <SideBarIcon tooltip={<span className="sidebar-tooltip">Banners</span>} icon={
                    <IconContext.Provider class="icons-color" value={{ color: "#B2B2B2", size: "2em"}}>
                        <RiFileList2Line/>
                    </IconContext.Provider>
                } />
                <SideBarIcon tooltip={<span className="sidebar-tooltip">Languages</span>} icon={
                    <IconContext.Provider className="icons-color" value={{ color: "#B2B2B2", size: "2em"}}>
                        <BiGlobe/>
                    </IconContext.Provider>
                } />
                <SideBarIcon tooltip={<span className="sidebar-tooltip">Footer</span>} icon={
                    <IconContext.Provider class="icons-color" value={{ color: "#B2B2B2", size: "2em"}}>
                        <RiLayoutBottomLine/>
                    </IconContext.Provider>
                } />
                <SideBarIcon tooltip={<span className="sidebar-tooltip">Social Networks</span>} icon={
                    <IconContext.Provider class="icons-color" value={{ color: "#B2B2B2", size: "2em"}}>
                        <BiShareAlt/>
                    </IconContext.Provider>
                } />
                <SideBarIcon tooltip={<span className="sidebar-tooltip">Users</span>} icon={
                    <IconContext.Provider class="icons-color" value={{ color: "#B2B2B2", size: "2em"}}>
                        <MdOutlinePeopleAlt/>
                    </IconContext.Provider>
                } />
                <SideBarIcon tooltip={<span className="sidebar-tooltip">IA</span>} icon={
                    <IconContext.Provider class="icons-color" value={{ color: "#B2B2B2", size: "2em"}}>
                        <RiOrganizationChart/>
                    </IconContext.Provider>
                } />
                <SideBarIcon tooltip={<span className="sidebar-tooltip">Teams</span>} icon={
                    <IconContext.Provider class="icons-color" value={{ color: "#B2B2B2", size: "2em"}}>
                        <BiCollection style = {{transform: 'rotate(180deg)' }}/>
                    </IconContext.Provider>
                } />
                <SideBarIcon tooltip={<span className="sidebar-tooltip">News Partners</span>} icon={
                    <IconContext.Provider class="icons-color" value={{ color: "#B2B2B2", size: "2em"}}>
                        <BiBriefcase/>
                    </IconContext.Provider>
                } />
            </div>
        </div>
    );
};

export const SideBarIcon = ({ icon, tooltip }) => {
    return (
        <Tippy content={tooltip} placement="right" offset={[0,22]} theme={'myThemeTooltip'}>
            <div aria-label="icons-div" className="sidebar-icon" >
                {icon}
            </div>
        </Tippy>
    );
};