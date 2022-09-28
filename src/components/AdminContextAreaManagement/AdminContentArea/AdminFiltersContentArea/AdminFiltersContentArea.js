import React, {useState, useEffect} from "react"
import "./AdminFiltersContentArea.scss"
import AdminFilterContentArea from "../AdminFilterContentArea/AdminFilterContentArea"
import AdminArticlesContentArea from "../AdminArticlesContentArea/AdminArticlesContentArea";
import AdminSearchContentArea from "../AdminSearchContentArea/AdminSearchContentArea";
import { useAuth0 } from "@auth0/auth0-react";
import FilterArticlesService from "../../../../services/FilterArticlesService/FilterArticlesService";
import SubcategoryService from "../../../../services/SubcategoryService/SubcategoryService";
import TeamService from "../../../../services/TeamService/TeamService";


function AdminFiltersContentArea()  {
    const categoryId = "0c4fc852-b12d-45a4-5dbd-08daa11db074";
    const categoryName = "sub";
    const objArticlesStatus = [
        { name: 'Published', id: '1' },
        { name: 'Unpublished', id: '2' },
    ];
    const [subcategories, setSubcategories] = useState([]);
    const [teams,setTeams] = useState(Array.from([]));
    const [filteredArticles, setFilteredArticles] = useState([]);
    const [articles, setArticles] = useState([]);
    const articlesStatus = Array.from(objArticlesStatus);
    const [filterSubcategoriesValue, setFilterSubcategoriesValue] = useState("All Subcategories");
    const [filterTeamsValue, setFilterTeamsValue] = useState("All Teams");
    const [filterStatusValue, setFilterStatusValue] = useState("All");
    const {getAccessTokenSilently} = useAuth0();

    const handleSubcategoryFilterChange = value =>{
        setFilterSubcategoriesValue(value);
    };
    const handleTeamFilterChange = value =>{
        setFilterTeamsValue(value);
    };
    const handleStatusFilterChange = value =>{
        setFilterStatusValue(value);
    };
    const handleChangeArticles = (value,isActive) =>{
       if(isActive) {
               setArticles(value);
       } else {
           setArticles(filteredArticles);
       }
    };

   useEffect(() => {
        (async () => {
            await getAccessTokenSilently().then(token => {
                const filterArticlesService = new  FilterArticlesService(token);
                const subcategoryService = new SubcategoryService(token);
                const teamService = new TeamService(token);

                subcategoryService.getSubcategoriesByCategoryId(categoryId).then(subcategories => {
                    setSubcategories(sortedByName(subcategories));

                    if (filterSubcategoriesValue === "All Subcategories") {
                        teamService.getTeams().then(teams => {setTeams(filterTeams(teams, subcategories));
                            filterArticlesService.getFilterArticles(categoryName,filterSubcategoriesValue, filterTeamsValue, filterStatusValue)
                                .then(articlesOld => {
                                    console.log("--all");  console.log(articlesOld);
                                    setFilteredArticles(getNewArticles(articlesOld,subcategories,teams,filterSubcategoriesValue, filterTeamsValue));
                                setArticles(getNewArticles(articlesOld,subcategories,teams,filterSubcategoriesValue, filterTeamsValue))})
                        });
                    } else {
                        let subcategory = subcategories.filter(item => item.name === filterSubcategoriesValue);
                        let subcategoryId = Array.from(subcategory)[0]["id"];
                        teamService.getTeamsBySubcategoryId(subcategoryId).then(teams => {setTeams(sortedByName(teams));
                            filterArticlesService.getFilterArticles(categoryName,filterSubcategoriesValue, filterTeamsValue, filterStatusValue)
                                .then(articlesOld => {setFilteredArticles(getNewArticles(articlesOld,subcategories,teams,filterSubcategoriesValue, filterTeamsValue));
                                setArticles(getNewArticles(articlesOld,subcategories,teams,filterSubcategoriesValue, filterTeamsValue))})
                        })
                    }
                });
            });
        })();

       function getNewArticles(articlesOld,subcategories,teams,filterSubcategoriesValue, filterTeamsValue){
           let articlesNew = [];

           if(filterSubcategoriesValue === "All Subcategories" && filterTeamsValue === "All Teams"){
               articlesOld.forEach((articleOld) =>{
                   let team = teams.find(({ id }) => id === articleOld.teamId);
                   if(team){
                       let subcategory = subcategories.find(({ id }) => id=== team.subcategoryId);
                       if(subcategory){
                           let articleNew = new CreateArticle(articleOld,subcategory.name , team.name);
                           articlesNew.push(articleNew);
                       }
                   }
               } )
           } else
           if(filterTeamsValue !== "All Teams") {
               let team = teams.find(({name}) => name === filterTeamsValue);
               if (team) {
                   articlesOld.forEach((articleOld) => {
                       let subcategory = subcategories.find(({id}) => id === team.subcategoryId);
                       if (subcategory) {
                           let articleNew = new CreateArticle(articleOld, subcategory.name, filterTeamsValue);
                           articlesNew.push(articleNew);
                       }
                   })
               }
           } else {
               articlesOld.forEach((articleOld) =>{
                   let team = teams.find(({ id }) => id=== articleOld.teamId);
                   if(team){
                       let articleNew = new CreateArticle(articleOld, filterSubcategoriesValue, team.name);
                       articlesNew.push(articleNew);
                   }
               })
           }

           return articlesNew;
       }

       function filterTeams(teams,subcategories) {
           const filterTeams = [];

           subcategories.forEach(subcategory => {
               teams.forEach(team => {
                   if (Object.keys(team).find(key => team[key] === subcategory["id"])) {
                       filterTeams.push(team);
                   }
               });
           })

           return sortedByName(filterTeams);
       }
    }, [getAccessTokenSilently,filterSubcategoriesValue, filterTeamsValue, filterStatusValue]);

   function sortedByName(array){
       let byName = array.slice(0);
       byName.sort(function(a,b) {
           let x = a.name.toLowerCase();
           let y = b.name.toLowerCase();
           return x < y ? -1 : x > y ? 1 : 0;
       });

       return byName;
   }

    function CreateArticle(articlesOld, subcategoryName, teamName){
        this.id = articlesOld.id;
        this.teamId = articlesOld.teamId;
        this.location = articlesOld.location;
        this.altImage = articlesOld.altImage;
        this.headline = articlesOld.headline;
        this.caption = articlesOld.caption;
        this.content = articlesOld.content;
        this.isPublished = articlesOld.isPublished;
        this.isShowComments = articlesOld.isShowComments;
        this.image = `data:ArticleImage/${articlesOld.image.fileExtension.slice(1)};base64,${articlesOld.image.bytes}`;
        this.subcategoryName = subcategoryName;
        this.teamName = teamName;
    }

    return (
        <div>
            <AdminSearchContentArea articles = {filteredArticles} handleChangeArticles={handleChangeArticles}/>
     <div className="filters">
            <AdminFilterContentArea  defValue="All Subcategories" components ={subcategories} handleChange={handleSubcategoryFilterChange}/>
            <AdminFilterContentArea  defValue="All Teams" components ={teams} handleChange={handleTeamFilterChange}/>
            <AdminFilterContentArea  defValue="All" components ={articlesStatus} handleChange={handleStatusFilterChange}/>
     </div>
             <AdminArticlesContentArea articles = {articles} />
        </div>
    );
}

export default AdminFiltersContentArea;