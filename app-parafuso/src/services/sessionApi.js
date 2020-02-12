import axios from 'axios';

const sessionApi = axios.create({

    baseURL: 'http://localhost:3334',
});

export default sessionApi;