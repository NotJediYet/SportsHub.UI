import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import UserHeader from "./UserHeader";
import LayoutSwitch from "../SwitchLayout/SwitchLayout.js"
import Profile from '../Profile/Profile';

test("logo or identity item should be rendered", () => {
    render(
        <BrowserRouter>
            <Routes>
                <Route path="*" element= {<UserHeader />}/>
            </Routes>
        </BrowserRouter>
    );
    const logoElement = screen.getByText("Logo or identity");
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
  
    // eslint-disable-next-line testing-library/prefer-screen-queries
    fireEvent.mouseOver(getAllByLabelText("switcher-div")[0]);
    // eslint-disable-next-line jest/valid-expect,no-unused-expressions
    expect(tooltips).toBeCalled;
});
test("Login and should be rendered", () => {
    render(
        <BrowserRouter>
            <Routes>
                <Route path="*" element= {<Profile />}/>
            </Routes>
        </BrowserRouter>
    );
    const ProfileElement = screen.getByText("Login");
    expect(ProfileElement).toBeInTheDocument();

});
test("Sign up and should be rendered", () => {
    render(
        <BrowserRouter>
            <Routes>
                <Route path="*" element= {<Profile />}/>
            </Routes>
        </BrowserRouter>
    );
    const ProfileElement = screen.getByText("Sign up");
    expect(ProfileElement).toBeInTheDocument();

});
test("Language should be rendered", () => {
    render(
        <BrowserRouter>
            <Routes>
                <Route path="*" element= {<Profile />}/>
            </Routes>
        </BrowserRouter>
    );
    const LanguageElement = screen.getByText("EN");
    expect(LanguageElement).toBeInTheDocument();

});
