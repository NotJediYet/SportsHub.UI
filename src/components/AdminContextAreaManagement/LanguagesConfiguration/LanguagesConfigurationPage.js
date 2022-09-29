import TableOfLanguages from "./LCComponents/TableOfLanguages/TableOfLanguages";
import "./LanguagesConfigurationPage.scss";

export default function LanguagesConfigurationPage() {
    return (
        <div className="content-area">
            <div className="table-section">
                <TableOfLanguages/>
            </div>
        </div>
    )
}