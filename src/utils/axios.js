import axios from "axios";


const instance = axios.create({
    baseURL: 'https://api.kinopoisk.dev/v1',
    headers: {"X-API-KEY": "5NQDCED-3964K1S-J1A8M87-6VGH3X1"}
})

export default instance