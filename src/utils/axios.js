import axios from "axios";


const instance = axios.create({
    baseURL: 'https://api.kinopoisk.dev/v1',
<<<<<<< HEAD
    headers: {"X-API-KEY": "Y1BGP81-J574RTB-NFP4SDB-VMC3FV5"}
=======
    headers: {"X-API-KEY": "H0YTT8S-M6XMS6K-NZ005SZ-F9RJ84H"}
>>>>>>> 1bb108d6c171388819f6624d28b4c774db8eab7f
})

export default instance