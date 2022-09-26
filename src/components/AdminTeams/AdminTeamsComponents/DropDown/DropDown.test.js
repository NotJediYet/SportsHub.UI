import { render, screen, fireEvent } from '@testing-library/react';
import DropDown from "./DropDown";

const values = [
    {id: 1, name: "1"},
    {id: 2, name: "2"},
    {id: 3, name: "3"}
];

test('renders teams drop-down', () => {
    render(
        <DropDown values={values} selected={values[0]}/>
    );
    const dropDownButton = screen.getByText("1");
    expect(dropDownButton).toBeInTheDocument();
    fireEvent.click(dropDownButton);
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
});