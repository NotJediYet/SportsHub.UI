import React, {useEffect, useRef, useState} from "react"
import {IconContext} from "react-icons";
import {BiDotsVertical} from "react-icons/bi";
import {BsThreeDots} from "react-icons/bs";
import "./NavigationMenuItem.scss"
import {GoTriangleRight} from "react-icons/go";

export default function NavigationMenuItem(props) {
    const [isItemHovering, setIsItemHovering] = useState(false);
    const [isMoveToHovering, setMoveToHovering] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
    const [activeHoverCategory, setActiveHoverCategory] = useState(-1);
    const [activeClickCategory, setActiveClickCategory] = useState("");
    const [subcategories, setSubcategories] = useState([]);

    const styleClasses = {category: "category-name", subcategory: "subcategory-team-name", team: "subcategory-team-name"};
    const menuRef = useRef(null);

    const showMenuItem = () => {
        if (props.itemType !== "category") return true
        return props.itemType === "category" && !props.item.isStatic;
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false)
                setIsItemHovering(false);
                setIsCategoriesOpen(false);
                setSubcategories([]);
                setActiveClickCategory("");
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuRef]);

    useEffect(() => {
        props.changeDraggable(!isMenuOpen);
    }, [isMenuOpen]);

    const handleMouseOverItem = () => {
        if (!isMenuOpen)
        setIsItemHovering(true);
    };

    const handleMouseOutItem = () => {
        if (!isMenuOpen) {
            setIsItemHovering(false);
            setMoveToHovering(false);
        }
    };

    const handleMouseOverMoveTo = () => {
        setMoveToHovering(true);
    };

    const handleMouseOutMoveTo = () => {
        setMoveToHovering(false);
    };

    const handleCategoryClick = (e, id) => {
        e.preventDefault();
        if (props.itemType === "subcategory") {
            props.moveItem(props.itemType, props.item, id);
            setIsMenuOpen(false)
            setIsItemHovering(false);
            setIsCategoriesOpen(false);
            setActiveClickCategory("");
        } else if (props.itemType === "team") {
            if (activeClickCategory === id) {
                setActiveClickCategory("");
                setSubcategories([]);
            } else {
                setActiveClickCategory(id);
                setSubcategories(props.subcategories.filter(item => item.categoryId === id));
            }
        }
    }

    const handleSubcategoryClick = (e, id) => {
        e.preventDefault();
        if (props.itemType === "team") {
            props.moveItem(props.itemType, props.item, id);
            setIsMenuOpen(false)
            setIsItemHovering(false);
            setIsCategoriesOpen(false);
            setSubcategories([]);
            setActiveClickCategory("");
        }
    }

    const changeVisibility = (e) => {
        e.preventDefault();
        props.onPressChangeVisibility();
        setIsItemHovering(false);
    }

    const openDropDownMenu = (e) => {
        e.preventDefault();
        setIsMenuOpen(!isMenuOpen)
    }

    const openCategoriesMenu = (e) => {
        e.preventDefault();
        setIsCategoriesOpen(!isCategoriesOpen)
    }

    const filterCategories = (item, realId) => {
        return !item.isStatic && item.id !== realId
    }

    return (
        <div className="item" data-testid = "item" onMouseOver={handleMouseOverItem} onMouseOut={handleMouseOutItem}
             style={{borderColor: props.isOverDrag ? "#D72130" : "#D4D9E2",
                 background: props.isStartDrag ? "#FDF5F5" : "#FFFEFE",
                 color: props.isStartDrag ? "#F4C7CA" : "#B2B2B2"}}>
            <div>
                {isItemHovering && ! props.isStartDrag &&  (
                    <span className="item-button" data-testid = "move-button">
                    <IconContext.Provider value={{size: "22", className: "item-icon"}}>
                        <BiDotsVertical className="item-icon-left-part"/>
                        <BiDotsVertical className="item-icon-right-part"/>
                    </IconContext.Provider>
                </span>
                )}
                {!isItemHovering && props.item.isHidden && (
                    <span className="hiddenLabel">
                        <h3> hidden </h3>
                    </span>
                )}
                <span style={{color: props.isStartDrag ? "#F4C7CA" : props.isActive ? "#D72130" : "#B2B2B2" }}
                      className={styleClasses[props.itemType]} onClick={props.onPressLoadItems}>
                {props.item.name}
            </span>
                <div className="dropDown-wrapper" ref={menuRef}>
                    {isItemHovering && ! props.isStartDrag && (
                        <button className="item-menu-button" data-testid = "menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <IconContext.Provider value={{size: "20", className: "menu-icon"}}>
                                <BsThreeDots style={{color: props.isStartDrag ? "#F4C7CA": isMenuOpen ? "#D72130" : "#B2B2B2"}}/>
                            </IconContext.Provider>
                        </button>
                    )}
                    {isMenuOpen && (
                        <div className="dropDown-menu">
                            <button className="dropDown-menu-button" onClick={openDropDownMenu}>
                                <IconContext.Provider value={{size: "20", className: "menu-navbar-icon"}}>
                                    <BsThreeDots style={{color: isMenuOpen ? "#D72130" : "#B2B2B2"}}/>
                                </IconContext.Provider>
                            </button>
                            { props.itemType !== "category" && (
                                <div className="dropDown-menu-element" onMouseOver={handleMouseOverMoveTo}
                                     onMouseOut={handleMouseOutMoveTo} onClick={openCategoriesMenu}>
                                    <h2 className="move-to-text">Move to</h2>
                                    <IconContext.Provider value={{size: "14", className: "move-to-icon"}}>
                                        <GoTriangleRight style={{
                                            color: (isMoveToHovering||isCategoriesOpen)  ? "#D72130" : "#B2B2B2"}}/>
                                    </IconContext.Provider>
                                </div>
                            )}
                            {isCategoriesOpen && (
                                <div className="dropDown-categories">
                                    {props.categories.filter(item => filterCategories(item, props.item.categoryId))
                                        .map((c, index) =>
                                        <div className="dropDown-menu-element" key={index}
                                             onMouseOver={() => setActiveHoverCategory(index)}
                                             onMouseOut={() => setActiveHoverCategory(-1)}
                                             onClick={(e) => handleCategoryClick(e, c.id)}>
                                            <h2 className="items-name">{c.name}</h2>
                                            { props.itemType === "team" && (
                                                <IconContext.Provider value={{size: "14", className: "move-to-icon"}}>
                                                    <GoTriangleRight
                                                        style={{color: (activeHoverCategory === index ||
                                                                activeClickCategory === c.id) ? "#D72130" : "#B2B2B2"}}/>
                                                </IconContext.Provider>
                                            )}
                                            {(activeClickCategory === c.id && props.itemType === "team") && (
                                                <div className="dropDown-subcategories">
                                                    {subcategories.filter(item => item.id !== props.item.subcategoryId)
                                                        .map((s, index) =>
                                                            <div className="dropDown-menu-element" key={index}
                                                                 onClick={(e) => handleSubcategoryClick(e, s.id)}>
                                                                <h2 className="items-name">{s.name}</h2>
                                                            </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    )}

                                </div>
                            )}
                            <div className="dropDown-menu-element" onClick={changeVisibility}>
                                <h2>{props.item.isHidden ? "Show" : "Hide"}</h2>
                            </div>
                            { showMenuItem() && (
                                <div className="dropDown-menu-element">
                                    <h2>Delete</h2>
                                </div>
                            )}
                            { showMenuItem() && (
                                <div className="dropDown-menu-element">
                                    <h2>Edit</h2>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}