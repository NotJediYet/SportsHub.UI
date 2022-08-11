import { render, screen, fireEvent } from '@testing-library/react';
import Surveys from "./Surveys";


test('renders learn react link', () => {
    render(
        <Surveys/>
    );
    const button1 = screen.getByText("OPENED");
    const button2 = screen.getByText("CLOSED");
    expect(screen.getByText("QUESTIONS")).toBeInTheDocument();
    expect(button1).toBeInTheDocument();
    expect(button2).toBeInTheDocument();
    fireEvent.click(button2);
    expect(screen.getByText("DATE")).toBeInTheDocument();
});