import { render, screen } from '@testing-library/react';
import ChngPasswordPages from "./ChngPasswordPages";


test('renders learn react link', () => {
    render(
        <ChngPasswordPages/>
    );
    const firstInput = screen.getByText("OLD PASSWORD");
    const secondInput = screen.getByText("NEW PASSWORD");
    const thirdInput = screen.getByText("PASSWORD CONFIRMATION");
    const button = screen.getByText("CHANGE PASSWORD");
    expect(firstInput).toBeInTheDocument();
    expect(secondInput).toBeInTheDocument();
    expect(thirdInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
});