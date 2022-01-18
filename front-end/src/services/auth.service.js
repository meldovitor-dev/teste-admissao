import axiosHelper from "../helpers/axios";

const authService = {
    
  async createUser(data) {
    return axiosHelper.post("/usuario/cadastro", data);
  },

  async getUsers() {
    return axiosHelper.get("/usuario/buscar");
  },

  async updateUser(data) {
    return axiosHelper.put(`/usuario/atualizar/${data.documentNumber}`, data);
  },

  async deleteUser(data) {
    return axiosHelper.delete(`/usuario/desativar/${data}`);
  }

};

export default authService;
