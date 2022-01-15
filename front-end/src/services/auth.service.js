import axios from 'axios';
const apiUrl = "https://app-frente-corretora.herokuapp.com";

const authService = {

    async authenticate(data) {
        const endpoint = `${apiUrl}/admin/login`;
        return axios.post(endpoint, data);
    },

    // // Função para salar o usuário logado no local storage
    // setLoggedUser(data) {
    //     let parsedData = JSON.stringify(data)
    //     localStorage.setItem("user", parsedData)
    // },

    // // Função responsável por recuperar o usuário logado do local storage
    // getLoggedUser() {
    //     let data = localStorage.getItem("user");
    //     if (!data) return null;
    //     try {
    //         let parsedData = JSON.parse(data)
    //         return parsedData
    //     } catch (error) {
    //         console.log(error)
    //         return null
    //     }
    // }
}

export default authService;