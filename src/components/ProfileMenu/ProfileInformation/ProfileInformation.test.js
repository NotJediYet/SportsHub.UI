import { render, screen } from '@testing-library/react';
import ProfileInformation from "./ProfileInformation";

test('renders learn react link', () => {
    render(
        <ProfileInformation/>
    );
    const firstInput = screen.getByText("FIRST NAME");
    const secondInput = screen.getByText("LAST NAME");
    const thirdInput = screen.getByText("EMAIL");
    const button = screen.getByText("UPDATE PROFILE");
    expect(firstInput).toBeInTheDocument();
    expect(secondInput).toBeInTheDocument();
    expect(thirdInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
});