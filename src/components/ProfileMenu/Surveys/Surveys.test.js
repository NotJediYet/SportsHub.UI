import { render, screen } from '@testing-library/react';
import Surveys from "./Surveys";


test('renders learn react link', () => {
    render(
        <Surveys/>
    );
    const button1 = screen.getByText("OPENED");
    const button2 = screen.getByText("CLOSED");
    const secondContainer = screen.getByText("READER POLL");
    expect(button1).toBeInTheDocument();
    expect(button2).toBeInTheDocument();
    expect(secondContainer).toBeInTheDocument();
});