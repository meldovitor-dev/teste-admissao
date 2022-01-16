import axios from 'axios';
const apiUrl = "http://localhost:8080";

const authService = {

    async createUser(data) {
        const endpoint = `${apiUrl}/usuario/cadastro`;
        return axios.post(endpoint, data);
    },

    async getUsers() {
        const endpoint = `${apiUrl}/usuario/buscar`;
        return axios.get(endpoint);
    },

    async updateUser(data) {
        const endpoint = `${apiUrl}/usuario/atualizar`;
        return axios.put(endpoint, data);
    },

    async deleteUser(data) {
        const endpoint = `${apiUrl}/usuario/desativar/${data}`;
        return axios.delete(endpoint);
    }
}

export default authService;