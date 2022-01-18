import axiosHelper from "../helpers/axios";

const adminService = {

    async resgister(data) {
        return axiosHelper.post("/admin/cadastro", data);
    },

    async login(data) {
        return axiosHelper.post("/admin/login", data);
    }
}

export default adminService