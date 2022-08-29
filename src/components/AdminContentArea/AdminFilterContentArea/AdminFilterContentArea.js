import React, {useState} from "react"
import "./AdminFilterContentArea.scss"
import {AiFillCaretDown} from "react-icons/ai";

export default function AdminFilterContentArea(props) {
    const defValue = props.defValue;
    const components = props.components;

    const [isFilterListOpen, setIsFilterListOpen] = useState(false);
    const [value, setValue] = useState(defValue);

    const onClick = event => {
        setValue(event.target.dataset.user);
        setIsFilterListOpen(!isFilterListOpen);
    }

    return (
            <div className="filter-dropdown">
                <div className="filter-dropdown-btn" onClick={() => setIsFilterListOpen(!isFilterListOpen)}>
                    {value}
                    <AiFillCaretDown/>
                </div>
                {(isFilterListOpen) && <div className="filter-dropdown-list">
                    {components.map((component) => (
                        <div className="filter-dropdown-list-element"
                             data-user={component.value}
                             onClick={onClick}
                        >{component.value}</div>
                    ))}
                </div>}
            </div>
    );
};

