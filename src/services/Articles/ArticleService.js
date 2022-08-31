function joinURL(baseURL, url) {
    return `${baseURL}/${url}`;
}

export default class ArticleService {
    
    constructor(token) {
        this.token = token;
        this.domain = "https://localhost:5001/api";
    }
    
    request(url, method="GET", data=null) {
        return fetch(
            joinURL(this.domain, url),
            {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    Authorization: `Bearer ${this.token}`,
                },
                method
            }
        );
    }

    get(url, id) {
        const method = 'GET';
        if (id) {
            url = `${url}/${id}`;
        }
        return this.request(url, method).then(res => res.json());
    }

    delete(url, id) {
        const method = 'DELETE';
        if (id) {
            url = `${url}/${id}`;
        }
        return this.request(url, method).then(res => res.ok ? res.json() : Promise.reject(res.status));
    }
}