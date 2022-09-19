import TableOfLanguages from "./LCComponents/TableOfLanguages/TableOfLanguages";
import { Context } from "../../ContextProvider/ContextProvider";
import {useContext} from "react";
import "./LanguagesConfigurationPage.scss";

export default function LanguagesConfigurationPage() {
    const {NewLanguageButtonClicked, setNewLanguageButtonClicked} = useContext(Context)
 
    return (
        <div className="content-area">
            <div className="table-section">
                <TableOfLanguages/>
            </div>
        </div>
    )
}