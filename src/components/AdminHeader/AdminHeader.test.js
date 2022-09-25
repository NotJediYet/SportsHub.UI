import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AdminHeader from "./AdminHeader";
import LayoutSwitch from "../SwitchLayout/SwitchLayout.js"
import Profile from '../Profile/Profile';

test("Sports Hub item should be rendered", () => {
    render(
        <BrowserRouter>
            <Routes>
                <Route path="*" element= {<AdminHeader />}/>
            </Routes>
        </BrowserRouter>
    );
    const logoElement = screen.getByText("Sports Hub");
    expect(logoElement).toBeInTheDocument();
});

test("Switch button should be rendered", () => {
    render(
        <BrowserRouter>
            <Routes>
                <Route path="*" element= {<AdminHeader />}/>
            </Routes>
        </BrowserRouter>
    );

    const tooltips = jest.fn();
    const { getAllByLabelText } = render(
        <BrowserRouter>
            <Routes>
                <Route path="*" element= {<LayoutSwitch tooltip={tooltips} />}/>
            </Routes>
        </BrowserRouter>
    );
  
    fireEvent.mouseOver(getAllByLabelText("switcher-div")[0]);
    expect(tooltips).toBeCalled;
});

test("Horisontal menu with static item should be rendered", () => {
    render(
        <BrowserRouter>
            <Routes>
                <Route path="*" element= {<AdminHeader />}/>
            </Routes>
        </BrowserRouter>
    );
    const horisontalMenuElement = screen.getByText("Horisontal menu with static items");
    expect(horisontalMenuElement).toBeInTheDocument();
});
