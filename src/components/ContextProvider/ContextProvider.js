import React, { useState } from "react";
import { LanguagesData } from "../AdminContextAreaManagement/LanguagesConfiguration/LanguagesData";

export const Context = React.createContext();
export const ContextProvider = ({ children }) => {
    const [languages, setLanguages] = useState(LanguagesData);
    const [teamsButtonText, setTeamsButtonText] = useState("Apply");
    const [AISaveButtonClicked, setAISaveButtonClicked] = useState(false);

    return (
        <Context.Provider value={{
            languages, setLanguages,
            teamsButtonText, setTeamsButtonText,
            AISaveButtonClicked, setAISaveButtonClicked
        }}>
            {children}
        </Context.Provider>
    );
};