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

    getTeams() {
        const method = 'GET';

        return this.request(urls.teamsEndpoint, method).then(res => res.json()
            .then(data => data)
        );
    }

    createTeam(name, subcategoryId) {
        const method = 'POST';

        let formData = new FormData();
        formData.append('name', name);
        formData.append('subcategoryId', subcategoryId);

        return this.request(urls.teamsEndpoint, method, formData)
            .then(res => {if (!res.ok) return Promise.reject(res.status)})
            .catch(error => console.log(error));
    }

    editTeam(data) {
        const method = 'PUT';

        let formData = new FormData();
        formData.append('id', data.id);
        formData.append('name', data.name);
        formData.append('subcategoryId', data.subcategoryId);
        formData.append('isHidden', data.isHidden);
        formData.append('OrderIndex', data.orderIndex);

        return this.request(urls.teamsEndpoint, method, formData)
            .then(res => {if (!res.ok) return Promise.reject(res.status)})
            .catch(error => console.log(error));
    }
}