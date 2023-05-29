import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getOneFilm} from "../../redux/reducers/oneFilm";
import FilmLeft from "./FilmLeft/FilmLeft";
import FilmRight from "./FilmRight/FilmRight";

const OneFilm = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const {product} = useSelector(store => store.oneFilm)
    console.log(product)
    useEffect(() => {
        dispatch(getOneFilm(params.id))
    },[])
    return (
        <>
         <section>
             <div className="container">
                 <div className="onefilm__row">
                     <FilmLeft product={product}/>
                     <FilmRight product={product}/>
                 </div>
             </div>
         </section>


        </>
    );
};

export default OneFilm;