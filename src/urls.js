const baseURL =  process.env.REACT_APP_SERVER_URL_LOCAL;

export const urls = {
    categoriesEndpoint: `${baseURL}api/Categories`,
    subcategoriesEndpoint:`${baseURL}api/Subcategories`,
    teamsEndpoint: `${baseURL}api/Teams`,
}