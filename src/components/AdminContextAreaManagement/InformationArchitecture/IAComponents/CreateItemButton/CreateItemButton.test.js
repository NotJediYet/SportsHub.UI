import React from "react";
import {render, screen} from "@testing-library/react";
import CreateItemButton from "./CreateItemButton";


test("Create item button should be rendered", () => {
    render(
        <CreateItemButton itemType="category" onPress={() => void(0)}/>
    );

    const button = screen.getByText("+ Add category");

    expect(button).toBeInTheDocument();
});