import React, { useState } from "react";

export const Context = React.createContext();
export const TeamsContext = ({ children }) => {
    const [teamsButtonText, setTeamsButtonText] = useState("Apply");
    const [languages, setLanguages] = useState("Apply");

    return (
        <Context.Provider value={{ teamsButtonText, setTeamsButtonText, languages, setLanguages }}>
            {children}
        </Context.Provider>
    );
};