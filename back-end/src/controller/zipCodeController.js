const axios = require('axios');

const getAnddres = async (zipCode) => {
    try {
        const config = {
            method: 'get',
            url: `https://viacep.com.br/ws/${zipCode}/json/`,
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
            }
        };
        const response = await axios(config);
        return response.data;
    } catch (err) {
        return null;
    }
}

module.exports = getAnddres;