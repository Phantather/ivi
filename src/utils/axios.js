import axios from "axios";


const instance = axios.create({
    baseURL: 'https://api.kinopoisk.dev/v1',
    headers: {"X-API-KEY": "Y1BGP81-J574RTB-NFP4SDB-VMC3FV5"}
})

export default instance