import React, {useEffect, useRef, useState} from "react"
import {IconContext} from "react-icons";
import {BiDotsVertical} from "react-icons/bi";
import {BsThreeDots} from "react-icons/bs";
import "./NavigationMenuItem.scss"

export default function NavigationMenuItem({name, itemType, isActive, onPress}) {
    const [isHovering, setIsHovering] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const styleClasses = {category: "category-name", subcategory: "subcategory-team-name", team: "subcategory-team-name"};
    const menuRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false)
                setIsHovering(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuRef]);

    const handleMouseOver = () => {
        if (!isMenuOpen)
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        if (!isMenuOpen)
        setIsHovering(false);
    };

    return (
        <div className="item" data-testid = "item" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={onPress}>
            {isHovering && (
                <span className="item-button" data-testid = "move-button">
                    <IconContext.Provider value={{size: "22", className: "item-icon"}}>
                        <BiDotsVertical className="item-icon-left-part"/>
                        <BiDotsVertical className="item-icon-right-part"/>
                    </IconContext.Provider>
                </span>
            )}
            <h3 style={{color: isActive ? "#D72130" : "#B2B2B2" }}
                className={styleClasses[itemType]}>
                {name}
            </h3>
            <div className="dropDown-wrapper" ref={menuRef}>
                {isHovering && (
                    <button className="item-button" data-testid = "menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <IconContext.Provider value={{size: "20", className: "menu-icon"}}>
                            <BsThreeDots style={{color: isMenuOpen ? "#D72130" : "#B2B2B2"}}/>
                        </IconContext.Provider>
                    </button>
                )}
                {isMenuOpen && (
                    <div className="dropDown-menu">
                        <button className="dropDown-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <IconContext.Provider value={{size: "20", className: "menu-icon"}}>
                                <BsThreeDots style={{color: isMenuOpen ? "#D72130" : "#B2B2B2"}}/>
                            </IconContext.Provider>
                        </button>
                        <div className="dropDown-menu-element">
                            <h2>Move to</h2>
                        </div>
                        <div className="dropDown-menu-element">
                            <h2>Hide</h2>
                        </div>
                        <div className="dropDown-menu-element">
                            <h2>Delete</h2>
                        </div>
                        <div className="dropDown-menu-element">
                            <h2>Edit</h2>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}