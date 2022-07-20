import { render, screen } from '@testing-library/react';
import ProfilePagesNav from "./ProfilePagesNav";
import {BrowserRouter, MemoryRouter, Route} from "react-router-dom";

test('renders learn react link', () => {
    render(
        <BrowserRouter >
            <ProfilePagesNav />
        </BrowserRouter>,
    );
    const personal = screen.getByText("Personal");
    const password = screen.getByText("Change password");
    const surveys = screen.getByText("My surveys");
    const hub = screen.getByText("Team hub");
    expect(personal).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(surveys).toBeInTheDocument();
    expect(hub).toBeInTheDocument();
});