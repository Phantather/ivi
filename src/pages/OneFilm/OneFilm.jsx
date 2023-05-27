import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getOneFilm} from "../../redux/reducers/oneFilm";

const OneFilm = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const {product} = useSelector(store => store.oneFilm)
    console.log(product)
    useEffect(() => {
        dispatch(getOneFilm(params.id))
    },[])
    return (
        <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/e-aiHVdRlJg"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen>

            </iframe>
            {/*<video src={} controls autoPlay></video>*/}
            {product.name}

        </div>
    );
};

export default OneFilm;