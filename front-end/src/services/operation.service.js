import axiosHelper from "../helpers/axios";

const OperationService = {

    async getOperations() {
        return axiosHelper.get("/operacoes/buscar");
    },

    async getPackages() {
        return axiosHelper.get("/pacotes/buscar");
    },

    async createOperation(data){
        return axiosHelper.post("/operacoes/criar", data)
    }
}

export default OperationService;