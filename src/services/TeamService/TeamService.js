import {urls} from "../../urls";

export default class TeamService {

    constructor(token) {
        this.token = token
    }

    request(url, method="GET", data=null) {
        const options = {
            headers: {
                "Accept": "multipart/form-data",
                "Access-Control-Allow-Origin": "*",
                Authorization: `Bearer ${this.token}`,
            },
            method: method,
        }
        if (data) {
            options.body = data;
        }
        return fetch(url, options);
    }

    getTeamsBySubcategoryId(subcategoryId) {
        const method = 'GET';
        return this.request(urls.teamsEndpoint, method).then(res => res.json()
            .then(data => data.filter(item => item.subcategoryId === subcategoryId).reverse())
        );
    }


    getTeams() {
        const method = 'GET';
        return this.request(urls.teamsEndpoint, method).then(res => res.json());
    }

    createTeam(data) {
        const method = 'POST';
        return this.request(urls.teamsEndpoint, method, data)
            .then(res => {if (!res.ok) return Promise.reject(res.status)})
            .catch(error => console.log(error));
    }
}