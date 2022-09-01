import React from "react";
import { render, screen } from "@testing-library/react";
import InformationArchitecturePage from "./InformationArchitecturePage";

test("Create section should be rendered", () => {
    render(
        <InformationArchitecturePage/>
    );

    const createSection = screen.getByTestId("create-section");

    expect(createSection).toBeInTheDocument();
});

test("Items section should be rendered", () => {
    render(<InformationArchitecturePage/>);

    const itemsSection = screen.getByTestId("items-section");

    expect(itemsSection).toBeInTheDocument();
});