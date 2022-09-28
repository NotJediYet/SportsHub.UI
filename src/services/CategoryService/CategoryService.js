import {urls} from "../../urls";

export default class CategoryService {

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

    getCategories() {
        const method = 'GET';

        return this.request(urls.categoriesEndpoint, method)
            .then(res => res.json()).then(data => data);
    }

    createCategory(data) {
        const method = 'POST';

        return this.request(urls.categoriesEndpoint, method, data)
            .then(res =>  {if (!res.ok) return Promise.reject(res.status)});
    }

    editCategory(data) {
        const method = 'PUT';

        return this.request(urls.categoriesEndpoint, method, data)
            .then(res =>  {if (!res.ok) return Promise.reject(res.status)});
    }
}