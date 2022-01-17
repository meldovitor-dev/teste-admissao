import axios from 'axios';
const apiUrl = "https://app-frente-corretora.herokuapp.com";
const token = localStorage.getItem("token");

const OperationService = {

    async getOperations() {
        const endpoint = `${apiUrl}/operacoes/buscar`;
        return axios.get(endpoint, {
            headers: {
                'authorization': token,
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            }});
    },

    async getPackages() {
        const endpoint = `${apiUrl}/pacotes/buscar`;
        return axios.get(endpoint, {
            headers: {
                'authorization': token,
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            }});
    },

    async createOperation(data){
        const endpoint = `${apiUrl}/operacoes/criar`;
        return axios.post(endpoint, data, {
            headers: {
                'authorization': token,
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            }});
    }
}

export default OperationService;