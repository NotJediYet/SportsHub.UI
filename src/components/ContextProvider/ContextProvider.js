import React, { useState } from "react";

export const Context = React.createContext();
export const ContextProvider = ({ children }) => {
    const [applyTeamButtonText, setApplyTeamButtonText] = useState("Apply");
    const [AISaveButtonClicked, setAISaveButtonClicked] = useState(false);

    return (
        <Context.Provider value={{
            teamsButtonText, setTeamsButtonText,
            AISaveButtonClicked, setAISaveButtonClicked
        }}>
            {children}
        </Context.Provider>
    );
};