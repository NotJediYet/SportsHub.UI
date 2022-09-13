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

    const categoryId = "c4ac0c1d-26fe-4877-b81d-08da90d6d7d1";

    const objArticlesStatus = [
        { name: 'Published' },
        { name: 'Unpublished' },
    ];

    const [subcategories, setSubcategories] = useState([]);
    const [teams,setTeams] = useState(Array.from([]));
    const [articles, setArticles] = useState([]);

    const [articlesStatus, setArticlesStatus] = useState(Array.from(objArticlesStatus));
    const [searchArticles, setSearchArticles] = useState(articles);
    const [isSearchActive, setIsSearchActive] = useState("false");

    const [filterSubcategoriesValue, setFilterSubcategoriesValue] = useState("All Subcategories");
    const [filterTeamsValue, setFilterTeamsValue] = useState("All Teams");
    const [filterStatusValue, setFilterStatusValue] = useState("All");

    const [filterArticlesService, setFilterArticlesService] = useState(null);
    const [subcategoryService, setSubcategoryService] = useState({});
    const [teamService, setTeamService] = useState({});

    const {getAccessTokenSilently} = useAuth0();
    const [times, setTimes] = useState(0);

    const handleSubcategoryFilterChange = value =>{
        setFilterSubcategoriesValue(value);
        setIsSearchActive("false");
    };

    const handleTeamFilterChange = value =>{
        setFilterTeamsValue(value);
        setIsSearchActive("false");
    };

    const handleStatusFilterChange = value =>{
        setFilterStatusValue(value);
        setIsSearchActive("false");
    };

    const handleChangeArticles = (value) =>{
       setTimes(times+1);
       if (times > 0) {
           setIsSearchActive("true");
           setSearchArticles(value);

       } else {setSearchArticles(articles);}
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
                            filterArticlesService.getFilterArticles(filterSubcategoriesValue, filterTeamsValue, filterStatusValue)
                                .then(articlesOld => {setArticles(getNewArticles(articlesOld,subcategories,teams,filterSubcategoriesValue, filterTeamsValue))})
                        });
                    } else {
                        let subcategory = subcategories.filter(item => item.name === filterSubcategoriesValue);
                        let subcategoryId = Array.from(subcategory)[0]["id"];
                        teamService.getTeamsBySubcategoryId(subcategoryId).then(teams => {setTeams(sortedByName(teams));
                            filterArticlesService.getFilterArticles(filterSubcategoriesValue, filterTeamsValue, filterStatusValue)
                                .then(articlesOld => {setArticles(getNewArticles(articlesOld,subcategories,teams,filterSubcategoriesValue, filterTeamsValue))})
                        })
                    }
                });

                setSubcategoryService(subcategoryService);
                setFilterArticlesService(filterArticlesService);
                setTeamService(teamService);
            });
        })();
    }, [getAccessTokenSilently,filterSubcategoriesValue, filterTeamsValue, filterStatusValue]);

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

   function sortedByName(array){
       let byName = array.slice(0);
       byName.sort(function(a,b) {
           let x = a.name.toLowerCase();
           let y = b.name.toLowerCase();
           return x < y ? -1 : x > y ? 1 : 0;
       });

       return byName;
   }

    function createArticle(articlesOld, subcategoryName, teamName){
        this.id = articlesOld.id;
        this.teamId = articlesOld.teamId;
        this.location = articlesOld.location;
        this.altImage = articlesOld.altImage;
        this.headline = articlesOld.headline;
        this.caption = articlesOld.caption;
        this.content = articlesOld.content;
        this.isPublished = articlesOld.isPublished;
        this.isShowComments = articlesOld.isShowComments;
        this.image = articlesOld.image;
        this.subcategoryName = subcategoryName;
        this.teamName = teamName;
    }

    function getNewArticles(articlesOld,subcategories,teams,filterSubcategoriesValue, filterTeamsValue){
        let articlesNew = [];

        if(filterSubcategoriesValue === "All Subcategories" && filterTeamsValue === "All Teams"){
            articlesOld.map((articleOld) =>{
                let team = teams.find(({ id }) => id === articleOld.teamId);
                if(team){
                    let subcategory = subcategories.find(({ id }) => id=== team.subcategoryId);
                    if(subcategory){
                        let articleNew = new createArticle(articleOld,subcategory.name , team.name);
                        articlesNew.push(articleNew);
                    }
                }
            } )
        } else
            if(filterTeamsValue !== "All Teams") {
                let team = teams.find(({name}) => name === filterTeamsValue);
                if (team) {
                    articlesOld.map((articleOld) => {
                    let subcategory = subcategories.find(({id}) => id === team.subcategoryId);
                    if (subcategory) {
                        let articleNew = new createArticle(articleOld, subcategory.name, filterTeamsValue);
                        articlesNew.push(articleNew);
                    }
                })
            }
            } else {
                articlesOld.map((articleOld) =>{
                    let team = teams.find(({ id }) => id=== articleOld.teamId);
                    if(team){
                        let articleNew = new createArticle(articleOld, filterSubcategoriesValue, team.name);
                        articlesNew.push(articleNew);
                }
            })
        }

        return articlesNew;
    }

    return (
        <div>
            <AdminSearchContentArea articles = {articles} handleChangeArticles={handleChangeArticles}/>
     <div className="filters">
            <AdminFilterContentArea  defValue="All Subcategories" components ={subcategories} handleChange={handleSubcategoryFilterChange}/>
            <AdminFilterContentArea  defValue="All Teams" components ={teams} handleChange={handleTeamFilterChange}/>
            <AdminFilterContentArea  defValue="All" components ={articlesStatus} handleChange={handleStatusFilterChange}/>
     </div>
            {(isSearchActive && times > 1) ? <AdminArticlesContentArea articles={searchArticles}/>
                                           : <AdminArticlesContentArea articles={articles}/>
            }
        </div>
    );
};

export default AdminFiltersContentArea;





