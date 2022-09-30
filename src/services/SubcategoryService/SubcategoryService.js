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

    getSubcategories() {
        const method = 'GET';

        return this.request(urls.subcategoriesEndpoint, method).then(res => res.json()
                .then(data => data)
            );
    }

    createSubcategory(data) {
        const method = 'POST';

        return this.request(urls.subcategoriesEndpoint, method, data)
            .then(res => {if (!res.ok) return Promise.reject(res.status)});
    }

    editSubcategory(data) {
        const method = 'PUT';

        return this.request(urls.subcategoriesEndpoint, method, data)
            .then(res => {if (!res.ok) return Promise.reject(res.status)});
    }

    getSubcategoriesByCategoryId(categoryId) {
        const method = 'GET';
        return this.request(urls.subcategoriesEndpoint, method).then(res => res.json()
            .then(data => data.filter(item => item.categoryId === categoryId).reverse())
        );
    }

    deleteSubcategory(id) {
        const method = 'DELETE';
        let url = urls.subcategoriesEndpoint;
        if (id) {
            url = `${url}/${id}`;
        }

        return this.request(url, method).then(res => res.ok ? res.json() : Promise.reject(res.status));
    }
}