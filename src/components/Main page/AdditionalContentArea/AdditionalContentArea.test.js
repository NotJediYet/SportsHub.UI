import React from "react";
import { render, screen } from "@testing-library/react";
import AdditionalContentArea from "AdditionalContentArea.js";
import {MemoryRouter} from "react-router-dom";

test("Additional content Area should be rendered", () => {
    render(
        <MemoryRouter>
            <AdditionalContentArea />
        </MemoryRouter>
    );
    const PictureElement = screen.getByText(AdditionalContentArea);
    expect(PictureElement).toBeInTheDocument();
});

