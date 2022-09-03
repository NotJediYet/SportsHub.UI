import React, {useState} from "react"
import "./CreateItemWindow.scss"

export default function CreateItemWindow(props) {
    const [itemName, setItemName] = useState("");
    const [isPending, setIsPending] = useState(false);

    const titles = {category: "Add new category", subcategory: "Add new subcategory", team: "Add new team"};

    const handleSubmit = event => {
        event.preventDefault();
        setIsPending(true);
        if (itemName.length !== 0) props.onPress(itemName);
        setIsPending(false)
        props.setTrigger(false);
    }

    return (props.trigger) ? (
        <div className="popup-window">
            <div className="popup-inner-window">
                <h2>{titles[props.itemType]}</h2>
                <form onSubmit={handleSubmit} data-testid = "form">
                    <label htmlFor="category-name">NAME</label>
                    <input type="text" placeholder="Name your menu item" value={itemName}
                    onChange={e => setItemName(e.target.value)}/>
                    <button className="add-button" type="submit" disabled={isPending}>
                        Add
                    </button>
                </form>
                <button className="close-button" onClick={() => props.setTrigger(false)}>
                    Cancel
                </button>
            </div>
        </div>
    ) : "";
}