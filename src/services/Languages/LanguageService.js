import { urls } from "../../urls";

export default class LanguageService {
    
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
        let url = urls.languagesEndpoint;
        if (id) {
            url = `${url}/${id}`;
        }

        return this.request(url, method).then(res => res.json());
    }

    put(data) {
        const method = 'PUT';
        let url = urls.languagesEndpoint;
        return this.request(url, method, data)
            .then(res => {if (!res.ok) return Promise.reject(res.status)})
            .catch(error => console.log(error));
    }
}