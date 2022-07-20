import { render, screen } from '@testing-library/react';
import SurveysOption from "./SurveysOption";


test('renders learn react link', () => {
    render(
        <SurveysOption/>
    );
    const button1 = screen.getByText("OPENED");
    const button2 = screen.getByText("CLOSED");
    const secondContainer = screen.getByText("READER POLL");
    expect(button1).toBeInTheDocument();
    expect(button2).toBeInTheDocument();
    expect(secondContainer).toBeInTheDocument();
});