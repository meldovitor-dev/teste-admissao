const axios = require('axios');

async function getAddress(zipCode) {
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
        return response;
    } catch (err) {
        return null;
    }
}

module.exports = getAddress;