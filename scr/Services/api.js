import axios from 'axios';


const api = axios.create({
    baseURL: 'https://viacep.com.br/ws/'
})

// https://viacep.com.br/ws/06783020/json


export default api;