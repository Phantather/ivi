<<<<<<< HEAD
import React, {useEffect} from 'react';
import axios from "axios";
=======
import React from 'react';
import SliderTop from "./SliderTop/SliderTop";
import SliderProduct from "./SliderProduct/SliderProduct";

>>>>>>> 17d489e5bcf86092dbb5f9cc6e4fe60ffd187105
const Home = () => {

    // useEffect(() => {
    //     axios.get('https://api.kinopoisk.dev/v1/movie', {
    //         headers: {"X-API-KEY": "6QYXPRK-1X4MFZ7-KBSH4F5-PBQM2AT"}
    //     }).then((res) => console.log(res))
    // },[])
    return (
        <>
            <SliderTop/>
            <SliderProduct/>
        </>
    );
};

export default Home;