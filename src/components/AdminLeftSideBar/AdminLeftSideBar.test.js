import React from "react";
import { render } from "@testing-library/react";

import LeftVerticalMenu from "./AdminLeftSideBar.js";
import SideBarIcon from "./AdminLeftSideBar.js";
import {Route, Routes} from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom";

test("all icons should be rendered", () => {
    render(
        <Router>
            <Routes>
                <Route path="admin/*" element={<LeftVerticalMenu />} />
            </Routes>
        </Router>
    );

    const icons = jest.fn();
    const tooltips = jest.fn();
    const links = jest.fn();

    const { getAllByLabelText } = render(
        <Router>
            <Routes>
                <Route path="admin/*" element={<SideBarIcon icon={icons} tooltip={tooltips} link={links}/>} />
            </Routes>
        </Router>
    );

    expect(icons).toBeCalled;
    expect(tooltips).toBeCalled;
    expect(links).toBeCalled;
});