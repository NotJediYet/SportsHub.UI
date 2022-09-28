import React, { useState } from "react";
import LanguageService from "../../services/Languages/LanguageService";
import { useAuth0 } from "@auth0/auth0-react";

export const Context = React.createContext();
export const ContextProvider = ({ children }) => {
    const {getAccessTokenSilently} = useAuth0();
    const [isDataLoading, setIsDataLoading] = useState(true);
    const [languages, setLanguages] = useState([]);
    const [teamsButtonText, setTeamsButtonText] = useState("Apply");
    const [AISaveButtonClicked, setAISaveButtonClicked] = useState(false);

    const getLanguages = async () => {
        setIsDataLoading(true);
        getAccessTokenSilently()
        .then(token => {
            const languageServices = new LanguageService(token);
            languageServices.get().then(languagesData => {
                setLanguages(languagesData);
                setIsDataLoading(false);
            });
        });
    };

    React.useEffect(() => {
        getLanguages();
    }, []);

    return (
        <Context.Provider value={{
            isDataLoading, setIsDataLoading,
            languages, setLanguages,
            teamsButtonText, setTeamsButtonText,
            AISaveButtonClicked, setAISaveButtonClicked
        }}>
            {children}
        </Context.Provider>
    );
};