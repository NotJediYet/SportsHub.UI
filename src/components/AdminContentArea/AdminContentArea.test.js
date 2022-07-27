import React from "react";
import { render, screen } from "@testing-library/react";

import ContentArea from "./AdminContentArea";

test("content area should be rendered", () => {
    render(<ContentArea />);
    const contentAreaElement = screen.getByText("Content area");
    expect(contentAreaElement).toBeInTheDocument();
});