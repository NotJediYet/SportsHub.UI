import {urls} from "../../urls";

export default class SubcategoryService {

    constructor(token) {
        this.token = token
    }

    request(url, method="GET", data=null) {
        const options = {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                Authorization: `Bearer ${this.token}`,
            },
            method: method,
        }
        if (data) {
            options.body = JSON.stringify(data);
        }
        return fetch(url, options);
    }

    getSubcategoriesByCategoryId(categoryId) {
        const method = 'GET';
        return this.request(urls.subcategoriesEndpoint, method).then(res => res.json()
                .then(data => data.filter(item => item.categoryId === categoryId).reverse())
            );
    }

    createSubcategory(data) {
        const method = 'POST';
        return this.request(urls.subcategoriesEndpoint, method, data)
            .then(res => {if (!res.ok) return Promise.reject(res.status)})
            .catch(error => console.log(error));
    }
}