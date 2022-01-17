import axios from 'axios';
const apiUrl = "http://localhost:8080";

const OperationService = {

    async getOperations() {
        const endpoint = `${apiUrl}/operacoes/buscar`;
        return axios.get(endpoint);
    },

    async getPackages() {
        const endpoint = `${apiUrl}/pacotes/buscar`;
        return axios.get(endpoint);
    },

    async createOperation(data){
        const endpoint = `${apiUrl}/operacoes/criar`;
        return axios.post(endpoint, data);
    }
}

export default OperationService;