import axios from "axios";


const instance = axios.create({
    baseURL: 'https://api.kinopoisk.dev/v1',
    headers: {"X-API-KEY": "VPDFV11-RZT4VJG-MYW8KMG-HF43TN2"}
})

export default instance