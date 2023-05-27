import axios from "axios";


const instance = axios.create({
    baseURL: 'https://api.kinopoisk.dev/v1',
    headers: {"X-API-KEY": "H0YTT8S-M6XMS6K-NZ005SZ-F9RJ84H"}
})

export default instance