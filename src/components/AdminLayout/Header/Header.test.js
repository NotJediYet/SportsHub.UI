import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from "./Header";
import SwitchViewButton from "./switch-view-button.js"

test("Switch button should be rendered", () => {
    render(
        <BrowserRouter>
            <Routes>
                <Route path="*" element= {<Header />}/>
            </Routes>
        </BrowserRouter>
    );

    const tooltips = jest.fn();
    const { getAllByLabelText } = render(
        <BrowserRouter>
            <Routes>
                <Route path="*" element= {<SwitchViewButton tooltip={tooltips} />}/>
            </Routes>
        </BrowserRouter>
    );
  
    fireEvent.mouseOver(getAllByLabelText("switcher-div")[0]);
    expect(tooltips).toBeCalled;
});

test("Profile should be rendered", () => {
    render(
        <BrowserRouter>
            <Routes>
                <Route path="*" element= {<Header />}/>
            </Routes>
        </BrowserRouter>
    );
    const profileElement = screen.getByText("Profile");
    expect(profileElement).toBeInTheDocument();
});

test("Active configuration page name, CTA should be rendered", () => {
    render(
        <BrowserRouter>
            <Routes>
                <Route path="*" element= {<Header />}/>
            </Routes>
        </BrowserRouter>
    );
    const pageNameElement = screen.getByText("Active configuration page name, CTA");
    expect(pageNameElement).toBeInTheDocument();
});

test("Horisontal menu with static item should be rendered", () => {
    render(
        <BrowserRouter>
            <Routes>
                <Route path="*" element= {<Header />}/>
            </Routes>
        </BrowserRouter>
    );
    const horisontalMenuElement = screen.getByText("Horisontal menu with static items");
    expect(horisontalMenuElement).toBeInTheDocument();
});