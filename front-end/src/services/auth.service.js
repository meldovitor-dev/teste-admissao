import axios from 'axios';
const apiUrl = "https://app-frente-corretora.herokuapp.com";
const token = localStorage.getItem("token");

const authService = {

    async createUser(data) {
        const endpoint = `${apiUrl}/usuario/cadastro`;
        return axios.post(endpoint, data, {
            headers: {
                'authorization': token,
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            }})
    },

    async getUsers() {
        const endpoint = `${apiUrl}/usuario/buscar`;
        return axios.get(endpoint, {
            headers: {
                'authorization': token,
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            }});
    },

    async updateUser(data, documentNumber) {
        const endpoint = `${apiUrl}/usuario/atualizar/${documentNumber}`;
        return axios.put(endpoint, data, {
            headers: {
                'authorization': token,
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            }});
    },

    async deleteUser(data) {
        const endpoint = `${apiUrl}/usuario/desativar/${data}`;
        return axios.delete(endpoint, {
            headers: {
                'authorization': token,
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            }});
    }
}

export default authService;