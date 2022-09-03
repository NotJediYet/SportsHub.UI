import React from "react";
import { render, screen} from "@testing-library/react";
import LinesBetweenItems from "./LinesBetweenItems";


test("Lines between items should be rendered", () => {
    let startIndex = 0;
    let itemsAmount = 5;

    render(
        <LinesBetweenItems lineType="left" startFromItemIndex={startIndex} toItemsAmount={itemsAmount}/>
    );

    const linesFrom = screen.getByTestId("lines-from");
    const horizontalLine = screen.getByTestId("horizontal-line");
    const linesTo = screen.getByTestId("lines-to");

    expect(linesFrom).toBeInTheDocument();
    expect(linesFrom.firstChild).toBeInTheDocument();
    expect(horizontalLine).toBeInTheDocument();
    expect(linesTo.firstChild).toBeInTheDocument();
    expect(linesTo).toBeInTheDocument();
});