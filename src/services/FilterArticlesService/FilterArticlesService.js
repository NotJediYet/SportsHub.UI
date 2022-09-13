import { urls } from "../../urls";

export default class FilterArticlesService {
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

    getFilterArticles(subcategoryName,teamName,status) {
        const method = 'GET';
        let url = urls.getFilterArticles;
        if (subcategoryName || teamName ||status) {
            url = `${url}/${subcategoryName}/${teamName}/${status}`;
        }
        return this.request(url, method).then(res => res.json());
    }
}

