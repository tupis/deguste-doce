import axios from "axios";

const baseUrl = 'http://localhost:5000/'

const API = axios.create({
    baseURL: baseUrl,
})

export default API;