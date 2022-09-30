import React, {useEffect, useState} from "react"
import "./InformationArchitecturePage.scss"
import NavigationMenuItem from "./IAComponents/NavigationMenuItem/NavigationMenuItem";
import CreateItemButton from "./IAComponents/CreateItemButton/CreateItemButton";
import LinesBetweenItems from "./IAComponents/LinesBetweenItems/LinesBetweenItems";
import {useAuth0} from "@auth0/auth0-react";
import CategoryService from "../../../services/CategoryService/CategoryService";
import SubcategoryService from "../../../services/SubcategoryService/SubcategoryService";
import TeamService from "../../../services/TeamService/TeamService";
import {useContext} from "react";
import {Context} from "../../ContextProvider/ContextProvider";
import { toast } from "react-hot-toast";
import SuccessToast from "../../Toasts/SuccessToast/SuccessToast";
import FailureToast from "../../Toasts/FailureToast/FailureToast";

export default function InformationArchitecturePage() {
    const {getAccessTokenSilently} = useAuth0();
    const {AISaveButtonClicked, setAISaveButtonClicked} = useContext(Context)

    const [categories, setCategories] = useState([]);
    const [subcategories, setSubcategories] = useState([]);
    const [teams, setTeams] = useState([]);
    const [activeCategory, setActiveCategory] = useState({id: -1, index: -1});
    const [activeSubcategory, setActiveSubcategory] = useState({id: -1, index: -1});
    const [categoryService, setCategoryService] = useState({});
    const [subcategoryService, setSubcategoryService] = useState({});
    const [teamService, setTeamService] = useState({});
    const [updates, setUpdates] = useState([]);
    const [currentItem, setCurrentItem] = useState({item: {}, type: ""});
    const [dragOverItemId, setDragOverItemId] = useState("");
    const [isDragAvailable, setIsDragAvailable] = useState(true);

    const itemsStates = {
        category: {items: categories, setItems: setCategories},
        subcategory: {items: subcategories, setItems: setSubcategories},
        team: {items: teams, setItems: setTeams}
    };

    const loadSubcategories = (categoryId, categoryIndex) => {
        subcategoryService.getSubcategories(categoryId).then(data => {
            setSubcategories(updatesLoadedItems("subcategory", data));
        });
        setTeams([]);
        setActiveCategory({id: categoryId, index: categoryIndex});
        setActiveSubcategory({id: -1, index: -1});
    };

    const loadTeams = (subcategoryId, subcategoryIndex) => {
        teamService.getTeams().then(data => {
            setTeams(updatesLoadedItems("team", data))
        });
        setActiveSubcategory({id: subcategoryId, index: subcategoryIndex});
    };

    const updatesLoadedItems = (itemType, items) => {
        updates.filter(element => element.type === itemType).forEach(element => {
            let index = items.findIndex(item => element.item.id === item.id);
            if (index > -1) {
                if (element.method === "edit") {
                    items[index] = element.item;
                } else if (element.method === "delete") {
                    items.splice(index, 1);
                }
            }
        })
        return items;
    }

    const uploadCategory = (categoryName) => {
        if (!categories.find(element => element.name === categoryName) && categoryName.length > 0) {
            categoryService.createCategory({name: categoryName}).then(() => categoryService.getCategories()
                .then(data => {
                    if (activeCategory.index >= 0)
                    setActiveCategory({id: activeCategory.id, index: activeCategory.index + 1})
                    setCategories(updatesLoadedItems("category", data));
                    toast.custom((t) =>
                        <SuccessToast t={t} message="Saved!" details={"The information architecture is successfully saved!"}/>
                    );
                }));
        } else toast.custom((t) => <FailureToast t={t}/>);
    }

    const uploadSubcategory = (subcategoryName) => {
        if (!subcategories.find(element => element.name === subcategoryName)
            && subcategoryName.length > 0 && activeCategory.index >= 0) {
            subcategoryService.createSubcategory({name: subcategoryName, categoryId: activeCategory.id})
                .then(() => subcategoryService.getSubcategories()
                    .then(data => {
                        if (activeSubcategory.index >= 0)
                        setActiveSubcategory({id: activeSubcategory.id, index: activeSubcategory.index + 1});
                        setSubcategories(updatesLoadedItems("subcategory", data));
                        toast.custom((t) =>
                            <SuccessToast t={t} message="Saved!" details={"The information architecture is successfully saved!"}/>
                        );
                    }));
        } else toast.custom((t) => <FailureToast t={t}/>);
    }

    const uploadTeam = (teamName) => {
        if (!teams.find(element => element.name === teamName)
            && teamName.length > 0 && activeSubcategory.index >= 0) {
            let formData = new FormData();
            formData.append('name', teamName);
            formData.append('subcategoryId', activeSubcategory.id);
            teamService.createTeam(formData).then(() => teamService.getTeams()
                .then(data => {
                    setTeams(updatesLoadedItems("team", data));
                    toast.custom((t) =>
                        <SuccessToast t={t} message="Saved!"
                                      details={"The information architecture is successfully saved!"}/>
                    );
                }));
        } else toast.custom((t) => <FailureToast t={t}/>);
    }

    const addItemsToUpdates = (item, itemType, method) => {
        if (item !== undefined) {
            setUpdates(updates => {
                let index = updates.findIndex(element => element.item.id === item.id)
                if (index > -1) {
                    if (method === "edit") {
                        updates[index].item = item;
                    } else if (method === "delete") {
                        updates.splice(index, 1);
                        updates.push({type: itemType, method: method, item: item});
                    }
                } else {
                    updates.push({type: itemType, method: method, item: item});
                }
                return updates;
            })
        }
    }

    const changeItemVisibility = (itemType, item) => {
        item.isHidden = !item.isHidden;

        itemsStates[itemType].setItems(items => {
            items[items.findIndex(element => element.id === item.id)] = item;
            return [...items]
        });

        addItemsToUpdates(item, itemType, "edit");
    }

    const moveItem = (itemType, item, newId) => {
        if (itemType === "subcategory") {
            item.categoryId = newId;
        } else if (itemType === "team") {
            item.subcategoryId = newId;
        }

        itemsStates[itemType].setItems(items => {
            items[items.findIndex(element => element.id === item.id)] = item;
            return [...items]
        });

        addItemsToUpdates(item, itemType, "edit");
    }

    const editItemName = (itemType, item, newName) => {
        item.name = newName;

        itemsStates[itemType].setItems(items => {
            items[items.findIndex(element => element.id === item.id)] = item;
            return [...items]
        });

        addItemsToUpdates(item, itemType, "edit");
    }

    const deleteItem = (itemType, item) => {
        itemsStates[itemType].setItems(items => {
            return [...items.filter(element => element.id !== item.id)]
        });

        addItemsToUpdates(item, itemType, "delete");

        if (itemType === "category") {
            setActiveCategory({id: -1, index: -1});
            setSubcategories([]);
            setTeams([]);
        } else if (itemType === "subcategory") {
            setActiveSubcategory({id: -1, index: -1});
            setTeams([]);
        } else {
        }
    }

    const moveItemToAnotherParent = (item, childType, parentType) => {
        let movedItem;

        if (parentType === "subcategory") {
            movedItem = {...currentItem.item, subcategoryId: item.id};
        } else if (parentType === "category") {
            movedItem = {...currentItem.item, categoryId: item.id};
            setTeams([])
            setActiveSubcategory({id: -1, index: -1})
        }

        itemsStates[currentItem.type].setItems(itemsStates[currentItem.type].items
            .filter(element => element.id !== currentItem.item.id));
        addItemsToUpdates(movedItem, currentItem.type, "edit");
    }


    const dragStartHandler = (e, item, itemType) => {
        setCurrentItem({item: item, type: itemType});
    }

    const dragEndHandler = () => {
        setDragOverItemId("");
        setCurrentItem({item: {}, type: ""});
    }

    const dragLeaveHandler = () => {
        setDragOverItemId("");
    }

    const dragOverHandler = (e, item) => {
        e.preventDefault();
        setDragOverItemId(item.id)
    }

    const dropHandler = (e, item, itemType, index) => {
        console.log(currentItem.item.orderIndex);
        if (currentItem.item.id !== item.id) {
            let firstElement;
            let secondElement;
            e.preventDefault();

            if (currentItem.type === itemType) {
                itemsStates[currentItem.type].setItems(itemsStates[currentItem.type].items.map(element => {
                    if (element.id === item.id) {
                        firstElement = {...element, orderIndex: currentItem.item.orderIndex};
                        return firstElement;
                    }
                    if (element.id === currentItem.item.id) {
                        secondElement = {...element, orderIndex: item.orderIndex};
                        return secondElement;
                    }
                    return element
                }));
                if (currentItem.type === "category") {
                    setActiveCategory({id: secondElement.id, index: index});
                    setActiveSubcategory({id: -1, index: -1});
                }
                else if (currentItem.type === "subcategory") {
                    setActiveSubcategory({id: secondElement.id, index: index});
                }

                addItemsToUpdates(firstElement, itemType, "edit");
                addItemsToUpdates(secondElement, itemType, "edit");
            } else if (currentItem.type === "team" && itemType === "subcategory") {
                if (currentItem.item.subcategoryId !== item.id) {
                    moveItemToAnotherParent(item, currentItem.type, itemType);
                }
            } else if (currentItem.type === "subcategory" && itemType === "category") {
                if (currentItem.item.categoryId !== item.id) {
                    moveItemToAnotherParent(item, currentItem.type, itemType);
                }
            }
        }
        setDragOverItemId("");
        setCurrentItem({item: {}, type: ""});
    }

    const sortItems = (a, b) => {
        if (a.orderIndex > b.orderIndex){
            return -1;
        } else {
            return 1;
        }
    }

    useEffect(() => {
        (async () => {
            await getAccessTokenSilently().then(token => {
                const categoryService = new CategoryService(token);
                categoryService.getCategories().then(data => setCategories(data))
                setCategoryService(categoryService);
                setSubcategoryService(new SubcategoryService(token));
                setTeamService(new TeamService(token));
            })
        })();
    }, [getAccessTokenSilently]);

    useEffect(() => {
        const editCategory = (category) => {
            categoryService.editCategory(category);
        }

        const editSubcategory = (subcategory) => {
            subcategoryService.editSubcategory(subcategory);
        }

        const editTeam = (team) => {
            let formData = new FormData();
            formData.append('id', team.id);
            formData.append('name', team.name);
            formData.append('subcategoryId', team.subcategoryId);
            formData.append('isHidden', team.isHidden);
            formData.append('OrderIndex', team.orderIndex);

            teamService.editTeam(formData);
        }

        const deleteCategory = (category) => {
            categoryService.deleteCategory(category.id);
        }

        const deleteSubcategory = (team) => {
            subcategoryService.deleteSubcategory(team.id);
        }

        const deleteTeam = (subcategory) => {
            teamService.deleteTeam(subcategory.id);
        }

        if (AISaveButtonClicked) {
           if (updates.length > 0) {
               const methods = {
                   category: {edit: editCategory, delete: deleteCategory},
                   subcategory: {edit: editSubcategory, delete: deleteSubcategory},
                   team: {edit: editTeam, delete: deleteTeam}
               };
               updates.forEach(update => {
                   if (update.method === "edit") methods[update.type].edit(update.item);
                   else if (update.method === "delete") methods[update.type].delete(update.item);
               })
               setUpdates([]);
               setSubcategories([]);
               setTeams([]);
               setActiveCategory({id: -1, index: -1});
               setActiveSubcategory({id: -1, index: -1});
               toast.custom((t) =>
                       <SuccessToast t={t} message="Saved!" details={"The information architecture is successfully saved!"}/>
               )
           }
           setAISaveButtonClicked(!AISaveButtonClicked)
        }}, [AISaveButtonClicked, updates, setAISaveButtonClicked, categoryService, subcategoryService, teamService]);

    return (
        <div className="content-area">
            <div className="create-section" data-testid="create-section">
                <CreateItemButton itemType="category" onPress={itemName => uploadCategory(itemName)}/>
                <CreateItemButton itemType="subcategory" onPress={itemName => uploadSubcategory(itemName)}/>
                <CreateItemButton itemType="team" onPress={itemName => uploadTeam(itemName)}/>
            </div>
            <div className="items-section" data-testid="items-section">
                <div className="items-group">
                    {categories.sort(sortItems).map((x, index) =>
                        <div key={index} className="itemBox" draggable={isDragAvailable}
                             onDragStart={(e) => dragStartHandler(e, x, "category")}
                             onDragLeave={(e) => dragLeaveHandler(e)}
                             onDragEnd={(e) => dragEndHandler(e)}
                             onDragOver={e => dragOverHandler(e, x)}
                             onDrop={e => dropHandler(e, x, "category", index)}>
                            <NavigationMenuItem key={index} itemType="category" isActive={(index === activeCategory.index)}
                                                onPressChangeVisibility={() => changeItemVisibility("category", x)}
                                                item = {x} onPressLoadItems={() => loadSubcategories(x.id, index)}
                                                isOverDrag = {dragOverItemId === x.id} changeDraggable = {setIsDragAvailable}
                                                isStartDrag = {currentItem !== {} ? currentItem.item.id === x.id : false}
                                                editName={editItemName} deleteItemName = {deleteItem}/>
                        </div>
                    )}
                </div>
                {(subcategories.length > 0) && (
                    <>
                        <LinesBetweenItems lineType="left" startFromItemIndex={activeCategory.index}
                                           toItemsAmount={subcategories.filter(item => item.categoryId === activeCategory.id).length}/>
                        <div className="items-group">
                            {subcategories.sort(sortItems).filter(item => item.categoryId === activeCategory.id)
                                .map((x, index) =>
                                <div key={index} className="itemBox" draggable={isDragAvailable}
                                     onDragStart={(e) => dragStartHandler(e, x, "subcategory")}
                                     onDragLeave={(e) => dragLeaveHandler(e)}
                                     onDragEnd={(e) => dragEndHandler(e)}
                                     onDragOver={e => dragOverHandler(e, x)}
                                     onDrop={e => dropHandler(e, x, "subcategory", index)}>
                                    <NavigationMenuItem key={index} isActive={(index === activeSubcategory.index)} item = {x}
                                                        onPressChangeVisibility={() => changeItemVisibility("subcategory", x)}
                                                        itemType="subcategory" onPressLoadItems={() => loadTeams(x.id, index)}
                                                        isOverDrag = {dragOverItemId === x.id } categories={categories}
                                                        isStartDrag = {currentItem.item.id === x.id} editName={editItemName}
                                                        moveItem = {moveItem} changeDraggable = {setIsDragAvailable}
                                                        deleteItemName = {deleteItem}/>
                                </div>
                            )}
                        </div>
                    </>
                )}
                {(teams.length > 0) && (
                    <>
                        <LinesBetweenItems lineType="right" startFromItemIndex={activeSubcategory.index}
                                           toItemsAmount={teams.filter(item => item.subcategoryId === activeSubcategory.id).length}/>
                        <div className="items-group">
                            {teams.sort(sortItems).filter(item => item.subcategoryId === activeSubcategory.id)
                                .map((x, index) =>
                                <div key={index} className="itemBox" draggable={isDragAvailable}
                                     onDragStart={(e) => dragStartHandler(e, x, "team")}
                                     onDragLeave={(e) => dragLeaveHandler(e)}
                                     onDragEnd={(e) => dragEndHandler(e)}
                                     onDragOver={e => dragOverHandler(e, x)}
                                     onDrop={e => dropHandler(e, x, "team", index)}>
                                    <NavigationMenuItem key={index} item = {x} itemType="team" isOverDrag = {dragOverItemId === x.id}
                                                        onPressChangeVisibility={() => changeItemVisibility("team", x)}
                                                        isStartDrag={currentItem !== {} ? currentItem.item.id === x.id : false}
                                                        categories={categories} AllSubcategories = {subcategories}
                                                        moveItem = {moveItem} changeDraggable = {setIsDragAvailable}
                                                        editName={editItemName} deleteItemName = {deleteItem}/>
                                </div>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}