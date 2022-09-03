import React, {useState} from "react"
import "./CreateItemButton.scss"
import CreateItemWindow from "../CreateItemWindow/CreateItemWindow";

export default function CreateItemButton({itemType, onPress}) {
    const [buttonPopup, setButtonPopup] = useState(false);

    const buttonTypes = {
        category: {name: "+ Add category", styleClass: "create-button"},
        subcategory: {name: "+ Add subcategory", styleClass: "create-subcategory-button"},
        team: {name: "+ Add team", styleClass: "create-button"}
    };

    return (
        <>
            <button className={buttonTypes[itemType].styleClass}
                onClick={() => setButtonPopup(true)}>
                {buttonTypes[itemType].name}
            </button>
            <CreateItemWindow trigger={buttonPopup} setTrigger={setButtonPopup} itemType = {itemType}
                              onPress = {(value) => onPress(value)}/>
        </>
    );
}