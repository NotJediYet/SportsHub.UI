import { render, screen, fireEvent } from '@testing-library/react';
import TeamTable from "./TeamTable";

const mockTeam = [{
    id: "1",
    name: "team1",
    location: "location1",
    date: "00/00/0000",
    category: {name: "category1"},
    subcategory: {name: "subcategory1"},
    teamLogo: "logo1"
}];

test('renders teams table', () => {
    render(
        <TeamTable fullTeamInfo={mockTeam}/>
    );
    expect(screen.getByText("team1")).toBeInTheDocument();
    expect(screen.getByText("location1")).toBeInTheDocument();
    expect(screen.getByText("00/00/0000")).toBeInTheDocument();
    expect(screen.getByText("subcategory1")).toBeInTheDocument();
    expect(screen.getByText("category1")).toBeInTheDocument();
});