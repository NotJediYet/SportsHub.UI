const baseURL =  process.env.REACT_APP_SERVER_URL;

export const urls = {
    categoriesEndpoint: `${baseURL}api/Categories`,
    subcategoriesEndpoint:`${baseURL}api/Subcategories`,
    teamsEndpoint: `${baseURL}api/Teams`,
    getFilterArticles: `${baseURL}api/FilterArticles`,
    articlesEndpoint: `${baseURL}api/Articles`,
    languagesEndpoint: `${baseURL}api/Languages`
}