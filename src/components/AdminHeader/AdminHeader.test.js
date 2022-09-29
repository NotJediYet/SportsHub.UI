import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AdminHeader from "./AdminHeader";
import LayoutSwitch from "../SwitchLayout/SwitchLayout.js"
import { ContextProvider } from "../ContextProvider/ContextProvider"

test("Sports Hub item should be rendered", () => {
    render(
        <ContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="*" element= {<AdminHeader />}/>
                </Routes>
            </BrowserRouter>
        </ContextProvider>
    );
    const logoElement = screen.getByText("Sports Hub");
    expect(logoElement).toBeInTheDocument();
});

test("Switch button should be rendered", () => {
    render(
        <ContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="*" element= {<AdminHeader />}/>
                </Routes>
            </BrowserRouter>
        </ContextProvider>
    );

    const tooltips = jest.fn();
    const { getAllByLabelText } = render(
        <ContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="*" element= {<LayoutSwitch tooltip={tooltips} />}/>
                </Routes>
            </BrowserRouter>
        </ContextProvider>
    );
  
    fireEvent.mouseOver(getAllByLabelText("switcher-div")[0]);
    expect(tooltips).toBeCalled;
});

test("Horisontal menu with static item should be rendered", () => {
    render(
        <ContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="*" element= {<AdminHeader />}/>
                </Routes>
            </BrowserRouter>
        </ContextProvider>
    );
    const horisontalMenuElement = screen.getByText("Horisontal menu with static items");
    expect(horisontalMenuElement).toBeInTheDocument();
});
