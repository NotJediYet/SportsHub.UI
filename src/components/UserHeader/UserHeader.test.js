import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import UserHeader from "./UserHeader";
import LayoutSwitch from "../SwitchLayout/SwitchLayout.js"

test("logo item should be rendered", () => {
    render(
        <BrowserRouter>
            <Routes>
                <Route path="*" element= {<UserHeader />}/>
            </Routes>
        </BrowserRouter>
    );
    const logoElement = screen.getByText("Sports Hub");
    expect(logoElement).toBeInTheDocument();
});

test("Search should be rendered", () => {
    render(
        <BrowserRouter>
            <Routes>
                <Route path="*" element= {<UserHeader />}/>
            </Routes>
        </BrowserRouter>
    );
    const searchElement = screen.getByText("Search");
    expect(searchElement).toBeInTheDocument();
});

test("Social media should be rendered", () => {
    render(
        <BrowserRouter>
            <Routes>
                <Route path="*" element= {<UserHeader />}/>
            </Routes>
        </BrowserRouter>
    );
    const socialMediaElement = screen.getByText("Social media");
    expect(socialMediaElement).toBeInTheDocument();
});

test("Switch button should be rendered", () => {
    render(
        <BrowserRouter>
            <Routes>
                <Route path="*" element= {<UserHeader />}/>
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
