import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import NavigationMenuItem from "./NavigationMenuItem";

test("Navigation menu item should be rendered", () => {
    let item = {name: "name", isHidden: false}

    render(
        <NavigationMenuItem name="testName" item={item} isActive={false} changeDraggable = {() => void(0)}
                            itemType="subcategory" onPress={() => void(0)}/>
    );

    fireEvent.mouseOver(screen.getByTestId("item"));

    const menuButton = screen.getByTestId("menu-button");
    const itemName = screen.getByText("name");
    const moveButton = screen.getByTestId("move-button");

    expect(menuButton).toBeInTheDocument();
    expect(itemName).toBeInTheDocument();
    expect(moveButton).toBeInTheDocument();
});

test("Dropdown menu should be rendered", () => {
    let item = {name: "name", isHidden: false}

    render(
        <NavigationMenuItem name="testName" item={item} isActive={false}
                            changeDraggable = {() => void(0)} itemType="subcategory" onPress={() => void(0)}/>
    );

    fireEvent.mouseOver(screen.getByTestId("item"));
    fireEvent.click(screen.getByTestId("menu-button"));

    const moveToItem = screen.getByText("Move to");
    const hideItem = screen.getByText("Hide");
    const deleteItem = screen.getByText("Delete");
    const edit = screen.getByText("Edit");

    expect(moveToItem).toBeInTheDocument();
    expect(hideItem).toBeInTheDocument();
    expect(deleteItem).toBeInTheDocument();
    expect(edit).toBeInTheDocument();
});
