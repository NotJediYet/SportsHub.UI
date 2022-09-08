import { urls } from "../../urls";

export default class ArticleService {
    
    constructor(token) {
        this.token = token;
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

    get(id) {
        const method = 'GET';
        let url = urls.articlesEndpoint;
        if (id) {
            url = `${url}/${id}`;
        }
        return this.request(url, method).then(res => res.json());
    }

    delete(id) {
        const method = 'DELETE';
        let url = urls.articlesEndpoint;
        if (id) {
            url = `${url}/${id}`;
        }
        return this.request(url, method).then(res => res.ok ? res.json() : Promise.reject(res.status));
    }
}