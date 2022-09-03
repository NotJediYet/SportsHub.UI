import React, {useEffect, useState} from "react"
import "./InformationArchitecturePage.scss"
import NavigationMenuItem from "./IAComponents/NavigationMenuItem/NavigationMenuItem";
import CreateItemButton from "./IAComponents/CreateItemButton/CreateItemButton";
import LinesBetweenItems from "./IAComponents/LinesBetweenItems/LinesBetweenItems";
import {useAuth0} from "@auth0/auth0-react";
import CategoryService from "../../../services/CategoryService/CategoryService";
import SubcategoryService from "../../../services/SubcategoryService/SubcategoryService";
import TeamService from "../../../services/TeamService/TeamService";

export default function InformationArchitecturePage() {
    const {getAccessTokenSilently} = useAuth0();

    const [categories, setCategories] = useState([]);
    const [subcategories, setSubcategories] = useState([]);
    const [teams, setTeams] = useState([]);
    const [activeCategory, setActiveCategory] = useState({id: -1, index: -1});
    const [activeSubcategory, setActiveSubcategory] = useState({id: -1, index: -1});
    const [categoryService, setCategoryService] = useState({});
    const [subcategoryService, setSubcategoryService] = useState({});
    const [teamService, setTeamService] = useState({});

    const loadSubcategories = (categoryId, categoryIndex) => {
        subcategoryService.getSubcategoriesByCategoryId(categoryId).then(data => setSubcategories(data));
        setTeams([]);
        setActiveCategory({id: categoryId, index: categoryIndex});
        setActiveSubcategory({id: -1, index: -1});
    };

    const loadTeams = (subcategoryId, subcategoryIndex) => {
        teamService.getTeamsBySubcategoryId(subcategoryId).then(data => setTeams(data));
        setActiveSubcategory({id: subcategoryId, index: subcategoryIndex});
    };

    const uploadCategory = (categoryName) => {
        if (!categories.find(element => element.name === categoryName)) {
            categoryService.createCategory({name: categoryName}).then(() => categoryService.getCategories()
                .then(data => {
                    if (activeCategory.index >= 0)
                    setActiveCategory({id: activeCategory.id, index: activeCategory.index + 1})
                    setCategories(data);
                }))
        }
    }

    const uploadSubcategory = (subcategoryName) => {
        if (activeCategory.index >= 0 && !subcategories.find(element => element.name === subcategoryName)) {
            subcategoryService.createSubcategory({name: subcategoryName, categoryId: activeCategory.id})
                .then(() => subcategoryService.getSubcategoriesByCategoryId(activeCategory.id)
                    .then(data => {
                        if (activeSubcategory.index >= 0)
                        setActiveSubcategory({id: activeSubcategory.id, index: activeSubcategory.index + 1});
                        setSubcategories(data);
                    }))
        }
    }

    const uploadTeam = (teamName) => {
        if (activeSubcategory.index >= 0 && !teams.find(element => element.name === teamName)) {
            let formData = new FormData();
            formData.append('name', teamName);
            formData.append('subcategoryId', activeSubcategory.id);
            teamService.createTeam(formData).then(() => teamService.getTeamsBySubcategoryId(activeSubcategory.id)
                .then(data => setTeams(data)));
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

    return (
        <div className="content-area">
            <div className="create-section" data-testid="create-section">
                <CreateItemButton itemType="category" onPress={itemName => uploadCategory(itemName)}/>
                <CreateItemButton itemType="subcategory" onPress={itemName => uploadSubcategory(itemName)}/>
                <CreateItemButton itemType="team" onPress={itemName => uploadTeam(itemName)}/>
            </div>
            <div className="items-section" data-testid="items-section">
                <div className="items-group">
                    {categories.map((x, index) =>
                        <NavigationMenuItem key={index} name={x.name} itemType="category" isActive={(index === activeCategory.index)}
                                            onPress={() => loadSubcategories(x.id, index)}/>)}
                </div>
                {(subcategories.length > 0) && (
                    <>
                        <LinesBetweenItems lineType="left" startFromItemIndex={activeCategory.index} toItemsAmount={subcategories.length}/>
                        <div className="items-group">
                            {subcategories.map((x, index) =>
                                <NavigationMenuItem key={index} name={x.name} isActive={(index === activeSubcategory.index)}
                                                    itemType="subcategory" onPress={() => loadTeams(x.id, index)}/>)}
                        </div>
                    </>
                )}
                {(teams.length > 0) && (
                    <>
                        <LinesBetweenItems lineType="right" startFromItemIndex={activeSubcategory.index} toItemsAmount={teams.length} />
                        <div className="items-group">
                            {teams.map((x, index) => <NavigationMenuItem key={index} name={x.name} isActive={false} itemType="team"/>)}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}