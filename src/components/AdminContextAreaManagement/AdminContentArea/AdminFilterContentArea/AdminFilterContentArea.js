import React, {useEffect, useRef, useState} from "react"
import "./AdminFilterContentArea.scss"
import {AiFillCaretDown} from "react-icons/ai";

export default function AdminFilterContentArea({defValue,components,handleChange}) {
    const [isFilterListOpen, setIsFilterListOpen] = useState(false);
    const [value, setValue] = useState(defValue);

    const onClick = event => {
        setValue(event.target.dataset.user);
        setIsFilterListOpen(!isFilterListOpen);
        handleChange(event.target.dataset.user);
    }

    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setIsFilterListOpen(false)
                }
            }
            document.addEventListener("mousedown", handleClickOutside);

            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    return (
            <div className="filter-dropdown" ref={wrapperRef}>
                <div className="filter-dropdown-btn" onClick={() => setIsFilterListOpen(!isFilterListOpen)}>
                    {value}
                    <AiFillCaretDown/>
                </div>
                {(isFilterListOpen) && <div className="filter-dropdown-list">
                    {Array.from(components).map((component) => (
                        <div className="filter-dropdown-list-element"
                             data-user={component.name}
                             onClick={onClick}
                             key={Math.random().toString(3)}
                        >{component.name}</div>
                    ))}
                </div>}
            </div>
    );
};

