import { render, screen, fireEvent } from '@testing-library/react';
import TeamNameAutoComplete from "./TeamNameAutoComplete";

const suggestions = ["name1"]

test('renders teams auto complete', () => {
    render(
        <TeamNameAutoComplete suggestions={suggestions}/>
    );
    expect(screen.queryByPlaceholderText("Name of team or player")).toBeInTheDocument();
});