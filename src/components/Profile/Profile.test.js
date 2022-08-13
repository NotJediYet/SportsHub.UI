import { render, screen } from '@testing-library/react';
import Profile from '../Profile/Profile';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import React from 'react';

test("Log in and should be rendered", () => {
    render(
        <BrowserRouter>
            <Routes>
                <Route path="*" element= {<Profile />}/>
            </Routes>
        </BrowserRouter>
    );
    const ProfileElement = screen.getByText("Log in");
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
test("Default language status should be rendered", () => {
    render(
        <BrowserRouter>
            <Routes>
                <Route path="*" element= {<Profile />}/>
            </Routes>
        </BrowserRouter>
    );
    const ProfileElement = screen.getByText("EN");
    expect(ProfileElement).toBeInTheDocument();

});