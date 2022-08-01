import React from "react";
import { render, screen, fireEvent, getAllByLabelText } from "@testing-library/react";

import LeftVerticalMenu from "./AdminLeftSideBar.js";
import SideBarIcon from "./AdminLeftSideBar.js";

test("all icons should be rendered", () => {
    render(<LeftVerticalMenu />);

    const icons = jest.fn();
    const tooltips = jest.fn();
  
    const { getAllByLabelText } = render(<SideBarIcon icon={icons} tooltip={tooltips} />);
  
    fireEvent.mouseOver(getAllByLabelText("icons-div")[0]);
    expect(icons).toBeCalled;
    expect(tooltips).toBeCalled;

    fireEvent.mouseOver(getAllByLabelText("icons-div")[1]);
    expect(icons).toBeCalled;
    expect(tooltips).toBeCalled;

    fireEvent.mouseOver(getAllByLabelText("icons-div")[2]);
    expect(icons).toBeCalled;
    expect(tooltips).toBeCalled;

    fireEvent.mouseOver(getAllByLabelText("icons-div")[3]);
    expect(icons).toBeCalled;
    expect(tooltips).toBeCalled;

    fireEvent.mouseOver(getAllByLabelText("icons-div")[4]);
    expect(icons).toBeCalled;
    expect(tooltips).toBeCalled;

    fireEvent.mouseOver(getAllByLabelText("icons-div")[5]);
    expect(icons).toBeCalled;
    expect(tooltips).toBeCalled;

    fireEvent.mouseOver(getAllByLabelText("icons-div")[6]);
    expect(icons).toBeCalled;
    expect(tooltips).toBeCalled;
    
    fireEvent.mouseOver(getAllByLabelText("icons-div")[7]);
    expect(icons).toBeCalled;
    expect(tooltips).toBeCalled;

    fireEvent.mouseOver(getAllByLabelText("icons-div")[8]);
    expect(icons).toBeCalled;
    expect(tooltips).toBeCalled;
});