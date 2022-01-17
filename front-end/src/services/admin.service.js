import axios from 'axios';
const apiUrl = "http://localhost:8080";

const adminService = {

    async resgister(data) {
        const endpoint = `${apiUrl}/admin/cadastro`;
        return axios.post(endpoint, data);
    },

    async login(data) {
        const endpoint = `${apiUrl}/admin/login`;
        return axios.post(endpoint, data);
    }
}

export default adminService