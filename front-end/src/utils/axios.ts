import axios from 'axios';

const url = 'https://app-frente-corretora.herokuapp.com';

const api = axios.create({
  baseURL: url,
});

export { api };