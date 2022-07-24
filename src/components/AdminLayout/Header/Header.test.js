import React from "react";
import { render, screen } from "@testing-library/react";

import Header from "./Header";

test("logo or identity should be rendered", () => {
    render(<Header />);
    const logoElement = screen.getByText("Sports Hub");
    expect(logoElement).toBeInTheDocument();
});

test("logo or identity should be rendered", () => {
    render(<Header />);
    const switchElement = screen.getByText("Switch");
    expect(switchElement).toBeInTheDocument();
});


test("logo or identity should be rendered", () => {
    render(<Header />);
    const pageNameElement = screen.getByText("Active configuration page name, CTA");
    expect(pageNameElement).toBeInTheDocument();
});

test("logo or identity should be rendered", () => {
    render(<Header />);
    const horisontalMenuElement = screen.getByText("Horisontal menu with static items");
    expect(horisontalMenuElement).toBeInTheDocument();
});