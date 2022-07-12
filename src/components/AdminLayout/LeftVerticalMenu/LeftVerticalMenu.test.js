import React from "react";
import { render, screen } from "@testing-library/react";

import LeftVerticalMenu from "./LeftVerticalMenu";

test("list of menu items should be rendered", () => {
    render(<LeftVerticalMenu />);
    const verticalMenuElement = screen.getByText("List of menu items");
    expect(verticalMenuElement).toBeInTheDocument();
});