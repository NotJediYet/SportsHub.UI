import React, {useState} from "react"
import "./EditItemWindow.scss"

export default function EditItemWindow(props) {
    const [itemName, setItemName] = useState("");
    const [isPending, setIsPending] = useState(false);

    const titles = {category: "Edit category name", subcategory: "Edit subcategory name", team: "Edit team name"};

    const handleSubmit = event => {
        event.preventDefault();
        setIsPending(true);
        props.onPress(itemName);
        setIsPending(false)
        props.setTrigger(false);
        setItemName("");
    }

    return (props.trigger) ? (
        <div className="popup-window">
            <div className="popup-inner-window">
                <h2>{titles[props.itemType]}</h2>
                <form onSubmit={handleSubmit} data-testid = "form" id="item-name-input">
                    <label htmlFor="category-name">NAME</label>
                    <input type="text" className="item-name-input" placeholder="Name your menu item" value={itemName}
                    onChange={e => setItemName(e.target.value)}/>
                    <button className="add-button" type="submit" disabled={isPending}>
                        Edit
                    </button>
                </form>
                <button className="close-button" onClick={() => {props.setTrigger(false); setItemName("");}}>
                    Cancel
                </button>
            </div>
        </div>
    ) : "";
}