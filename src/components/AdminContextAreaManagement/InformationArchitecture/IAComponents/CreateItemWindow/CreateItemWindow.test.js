import React from "react";
import { render, screen } from "@testing-library/react";
import CreateItemWindow from "./CreateItemWindow";

test("Title should be rendered", () => {
    let buttonPopup = true;
    const setButtonPopup = () => {buttonPopup = !buttonPopup}

    render(
        <CreateItemWindow trigger={buttonPopup} setTrigger={setButtonPopup}
                          itemType = "category"  onPress = {() => void(0)}/>
    );

    const title = screen.getByText("Add new category");

    expect(title).toBeInTheDocument();

});

test("Form should be rendered", () => {
    let buttonPopup = true;
    const setButtonPopup = () => {buttonPopup = !buttonPopup}

    render(
        <CreateItemWindow trigger={buttonPopup} setTrigger={setButtonPopup}
                          itemType = "category"  onPress = {() => void(0)}/>
    );

    const form = screen.getByTestId("form");
    const label = screen.getByText("NAME");

    expect(form).toBeInTheDocument();
    expect(label).toBeInTheDocument();

});

test("Buttons should be rendered", () => {
    let buttonPopup = true;
    const setButtonPopup = () => {buttonPopup = !buttonPopup}

    render(
        <CreateItemWindow trigger={buttonPopup} setTrigger={setButtonPopup}
                          itemType = "category"  onPress = {() => void(0)}/>
    );

    const addButton = screen.getByText("Add");
    const cancelButton = screen.getByText("Cancel");

    expect(addButton).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();

});