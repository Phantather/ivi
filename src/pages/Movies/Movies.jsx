import React, {useEffect} from 'react';
import Card from "../../components/Card";
import {useDispatch, useSelector} from "react-redux";
import user from "../../redux/reducers/user";
import {getMovies} from "../../redux/reducers/movie";

const Movies = () => {

    const {data} = useSelector(state => state.movie)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMovies())
    },[])

    return (
        <section className="movies">
            <div className="container">
                <div className="movies__row">
                    {
                        data.map((item) => (
                            <Card item={item}/>
                        ))
                    }

                </div>
            </div>
        </section>
    );
};

export default Movies;