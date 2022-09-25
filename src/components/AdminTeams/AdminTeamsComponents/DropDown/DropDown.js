import { useState, useRef, useEffect } from "react";
import { VscTriangleDown } from 'react-icons/vsc';
import "./DropDown.scss";

export default function DropDown(props){
    const[isActive, setIsActive] = useState(false);

    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setIsActive(false)
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
    return(
        <div id={props.id} className={"teams-drop-down"} ref={wrapperRef}>
            <div className={"teams-drop-down-button"} onClick={() => setIsActive(!isActive)}><p>{props.selected.name}</p><VscTriangleDown/></div>
            {isActive && (
                <div className={"teams-drop-down-content"}>
                    {props.values.map((d) =>
                        <div key={d.id} className={"teams-drop-down-item"} onClick={() => {props.setSelected(d); setIsActive(false)}}><p>{d.name}</p></div>
                    )}
                </div>
            )}
        </div>
    )
}