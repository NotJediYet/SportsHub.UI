import React from "react"
import Header from './Header/Header.js';
import LeftVerticalMenu from './LeftVerticalMenu/LeftVerticalMenu.js';
import {Outlet} from "react-router-dom"

export default function MainPageAdmin(props) {
    return (
        <div >
            <Header />
            <LeftVerticalMenu />
            <Outlet />
        </div>
    );
}

