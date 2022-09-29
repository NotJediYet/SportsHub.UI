import { render, screen } from '@testing-library/react';
import Profile from '../Profile/Profile';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import React from 'react';
import { ContextProvider } from "../ContextProvider/ContextProvider"

test("Log in and should be rendered", () => {
    render(
        <ContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="*" element= {<Profile />}/>
                </Routes>
            </BrowserRouter>
        </ContextProvider>
    );
    const ProfileElement = screen.getByText("Log in");
    expect(ProfileElement).toBeInTheDocument();

});
test("Sign up and should be rendered", () => {
    render(
        <ContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="*" element= {<Profile />}/>
                </Routes>
            </BrowserRouter>
        </ContextProvider>
    );
    const ProfileElement = screen.getByText("Sign up");
    expect(ProfileElement).toBeInTheDocument();

});