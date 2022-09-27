import { useState, useEffect, useContext } from "react";
import "./AdminTeamLayout.scss"
import {useAuth0} from "@auth0/auth0-react";
import CategoryService from "../../services/CategoryServices/CategoryServices";
import SubcategoryService from "../../services/SubCategoryServices/SubCategoryServices";
import TeamService from "../../services/TeamServices/TeamServices";
import {MdPhotoCamera} from 'react-icons/md';
import Map from "./AdminTeamsComponents/Map/Map";
import DropDown from "./AdminTeamsComponents/DropDown/DropDown";
import { Context } from "../ContextProvider/ContextProvider";
import AutoComplete from "./AdminTeamsComponents/TeamNameAutoComplete/TeamNameAutoComplete";
import SuccessToast from "../Toasts/SuccessToast/SuccessToast";
import FailureToast from "../Toasts/FailureToast/FailureToast";
import { toast } from "react-hot-toast";
import TeamTable from "./AdminTeamsComponents/TeamTable/TeamTable";

export default function AdminTeamsLayout(){
    const {getAccessTokenSilently} = useAuth0();
    const [categoryService, setCategoryService] = useState({});
    const [categories, setCategories] = useState([]);
    const [subCategoryService, setSubCategoryService] = useState({});
    const [subCategories, setSubCategories] = useState([]);
    const [teamService, setTeamService] = useState({});
    const [teams, setTeams] = useState([]);
    const [fullTeamInfo, setFullTeamInfo] = useState();
    const {teamsButtonText, setTeamsButtonText} = useContext(Context);
    const [suggestions, setSuggestions] = useState([]);
    const [isFilePicked, setIsFilePicked] = useState(false);
    const [isShownImage, setIsShownImage] = useState(false);
    const [file,setFile] = useState();
    const [image,setImage] = useState();
    const [selectedTeamId, setSelectedTeamId] = useState();
    const [selectedCategory, setSelectedCategory] = useState({name: "All"});
    const [selectedSubCategory, setSelectedSubCategory] = useState({name: "All"});
    const [selectedLocation, setSelectedLocation] = useState("All");
    const [selectedTeamName, setSelectedTeamName] = useState("");

    useEffect(() => {
        (async () => {
            await getAccessTokenSilently().then(token => {
                const categoryService = new CategoryService(token);
                const subCategoryService = new SubcategoryService(token);
                const teamService = new TeamService(token);
                subCategoryService.getSubCategories().then(data => setSubCategories(data));
                categoryService.getCategories().then(data => setCategories(data));
                teamService.getTeams().then(data => setTeams(data));
                setSubCategoryService(subCategoryService);
                setCategoryService(categoryService);
                setTeamService(teamService);
            })
        })();
        }, [getAccessTokenSilently]);

    function handleTeamLogoChange(event){
        if (event.target.files[0]){
            setFile(event.target.files[0]);
            setImage(URL.createObjectURL(event.target.files[0]));
            setIsFilePicked(true);
            setIsShownImage(true);
        }
    }

    useEffect(() => {
        if (teams){
            setFullTeamInfo(teams.map((key) =>
                ({
                    id: key.id,
                    name: key.name,
                    location: key.location,
                    date: key.creationDate,
                    category: categories.find((item) => item.id === (subCategories.find((subcategory) => subcategory.id === key.subcategoryId).categoryId)),
                    subcategory: subCategories.find((item) => item.id === key.subcategoryId),
                    teamLogo: key.teamLogo
                })
            ));
        }
    }, [teams, categories, subCategories]);

    useEffect(() => {
        if (teams.length>0){
            let temp = [];
            teams.forEach(element => temp.push(element.name));
            setSuggestions(temp);
        }
    }, [teams]);

    useEffect(() => {
        if (teamsButtonText !== "Save")
            setSelectedSubCategory({name:"All"})
    }, [selectedCategory]);

    function SetDefaultFields() {
        setSelectedCategory({name: "All"});
        setSelectedSubCategory({name: "All"});
        setSelectedLocation("All");
        setSelectedTeamName("");
        setIsFilePicked(false);
        setIsShownImage(false);
        setImage(undefined);
        setFile(undefined);
        setSelectedTeamId(undefined);
    }

    function AddTeamRequest(){
        let formData = new FormData();
        formData.append("Name", selectedTeamName);
        formData.append("Location", selectedLocation);
        formData.append("SubcategoryId", selectedSubCategory.id);
        formData.append("TeamLogo", file);

        teamService.createTeam(formData)
            .then(
                (res) => {toast.custom(
                    (t) => <SuccessToast
                        t={t}
                        message="Created!"
                        details={"The team is successfully created."}
                    />
                ); setTeamsButtonText("Apply")}
            )
            .catch((error)=>
                toast.custom(
                    (t) => <FailureToast
                        t={t}
                        handleRetry={AddTeamRequest}
                    />
                )
            )
            .then(() => {
                teamService.getTeams().then(data => setTeams(data));
                subCategoryService.getSubCategories().then(data => setSubCategories(data));
                categoryService.getCategories().then(data => setCategories(data));});
    }

    function EditTeamRequest(){
        let formData = new FormData();
        formData.append("Id", selectedTeamId);
        formData.append("Name", selectedTeamName);
        formData.append("Location", selectedLocation);
        formData.append("SubcategoryId", selectedSubCategory.id);
        formData.append("TeamLogo", file);

        teamService.editTeam(formData)
            .then(
                (res) => {toast.custom(
                    (t) => <SuccessToast
                        t={t}
                        message="Edited!"
                        details={"The team is successfully edited."}
                    />
                ); setTeamsButtonText("Apply")}
            )
            .catch((error)=>
                toast.custom(
                    (t) => <FailureToast
                        t={t}
                        handleRetry={EditTeamRequest}
                    />
                )
            )
            .then(() => {
                teamService.getTeams().then(data => setTeams(data));
                subCategoryService.getSubCategories().then(data => setSubCategories(data));
                categoryService.getCategories().then(data => setCategories(data));});
    }

    useEffect(() => {
        if (teamsButtonText !== "Save")
            SetDefaultFields();
    }, [teamsButtonText]);

    function FilterSubCategoriesByCategories(){
        return subCategories.filter(element => element.categoryId === selectedCategory.id);
    }

    return(
       <div className={"admin-teams-layout-container"}>
           <div className={"create-team-container"}>
               <Map/>
               <div className={"create-team-inputs"}>
                   <label htmlFor="select-location-for-team">SELECT LOCATION</label>
                   <div id={"select-location-for-team"}><p>{selectedLocation}</p></div>
                   <label htmlFor="select-category-for-team">SELECT CATEGORY</label>
                   <DropDown id={"select-category-for-team"} values={categories} selected={selectedCategory} setSelected={setSelectedCategory}/>
                   <label htmlFor="select-subcategory-for-team">SELECT SUBCATEGORY</label>
                   <DropDown id={"select-subcategory-for-team"} values={FilterSubCategoriesByCategories()} selected={selectedSubCategory} setSelected={setSelectedSubCategory}/>
                   <label htmlFor="select-team-name">TEAM</label>
                   <AutoComplete suggestions={suggestions} setSelectedTeamName={setSelectedTeamName} selectedTeamName={selectedTeamName} teamsButtonText={teamsButtonText}/>
                   <div style={{display: teamsButtonText === "Apply" ? "none" : "flex"}} className={"upload-team-logo-container"} onMouseLeave={() => {if (isFilePicked){setIsShownImage(true)}}}>
                       <input id={"create-team-logo-input"} style={{display: "none"}} type="file" onChange={handleTeamLogoChange} accept="image/jpeg, image/png, image/svg+xml"/>
                       <div style={{display: isShownImage === true ? "none" : "flex"}} className={"create-team-logo-input-button"} type="button" onClick={() => document.getElementById('create-team-logo-input').click()}>
                           <div className={"create-team-logo-input-svg"}>
                               <MdPhotoCamera/>
                           </div>
                           <div>
                               <p>Add logo</p>
                               <p>right here</p>
                           </div>
                       </div>
                       <img alt={"Error occured"} onMouseOver={() => setIsShownImage(false)}  style={{display: ((isShownImage === true) && (isFilePicked === true)) ? "flex" : "none"}} src={image} className={"create-team-logo-image"}/>
                   </div>
                   <div style={{opacity: teamsButtonText === "Apply" ? "0.5" : "1", cursor: teamsButtonText === "Apply" ? "auto" : "pointer" }} className={"create-team-apply-button"} onClick={() => {
                       if (teamsButtonText==="Add to list")
                           AddTeamRequest()
                       if (teamsButtonText === "Save")
                           EditTeamRequest()
                   }}>{teamsButtonText}</div>
                   <p className={"create-team-cancel-button"} style={{opacity: teamsButtonText === "Apply" ? "0.5" : "1", cursor: teamsButtonText === "Apply" ? "auto" : "pointer" }} onClick={() => {SetDefaultFields(); setTeamsButtonText("Apply")}}>Cancel</p>
               </div>
           </div>
            <TeamTable setIsShownImage={setIsShownImage} setIsFilePicked={setIsFilePicked} setFile={setFile} setImage={setImage} teamService={teamService} setSelectedTeamId={setSelectedTeamId} setTeamsButtonText={setTeamsButtonText} teamsButtonText={teamsButtonText} fullTeamInfo={fullTeamInfo} setSelectedTeamName={setSelectedTeamName} setSelectedLocation={setSelectedLocation} setSelectedSubCategory={setSelectedSubCategory} setSelectedCategory={setSelectedCategory}/>
       </div>
    )
}

