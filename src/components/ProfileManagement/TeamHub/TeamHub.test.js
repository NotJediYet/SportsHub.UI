import { render, screen } from '@testing-library/react';
import TeamHub from "./TeamHub";


test('renders learn react link', () => {
    render(
        <TeamHub/>
    );
    const firstText = screen.getByText("YOUR FOLLOWED TEAMS");
    const secondText = screen.getByText("Manage teams list");
    expect(firstText).toBeInTheDocument();
    expect(secondText).toBeInTheDocument();
});