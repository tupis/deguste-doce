import axios from "axios";

const baseUrl = 'https://deguste-doce.herokuapp.com/'

const API = axios.create({
    baseURL: baseUrl,
})

export default API;