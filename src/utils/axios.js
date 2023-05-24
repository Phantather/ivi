import axios from "axios";


const instance = axios.create({
    baseURL: 'https://api.kinopoisk.dev/v1',
    headers: {"X-API-KEY": "NQFHK8G-6B14XC8-MHFHN58-1N8JDWZ"}
})

export default instance