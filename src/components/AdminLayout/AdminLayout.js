import React from "react"
import Header from './Header/Header.js';
import LeftVerticalMenu from './LeftVerticalMenu/LeftVerticalMenu.js'
import ContentArea from "./ContentArea/ContentArea";

export default function AdminLayout() {
    return (
        <div >
            <Header />
            <LeftVerticalMenu />
            <ContentArea />
        </div>
    );
}

