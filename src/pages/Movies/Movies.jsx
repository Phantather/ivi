import React, {useEffect} from 'react';
import Card from "../../components/Card";
import {useDispatch, useSelector} from "react-redux";
import user from "../../redux/reducers/user";
import {getMovies} from "../../redux/reducers/movie";
import SelectGenres from "./SelectGenres/SelectGenres";
import SelectYear from "./SelectYear/SelectYear";
import SelectCountries from "./SelectCountries/SelectCountries";

const Movies = () => {

    const {data, filter} = useSelector(state => state.movie)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getMovies(filter))
    },[filter])

    return (
        <section className="movies">
            <div className="container">

                <SelectYear/>


                <div className="movies__filter">
                    <SelectGenres/>
                </div>

                <div className="movies__row">
                    {
                        data?.map((item) => (
                            <Card item={item}/>
                        ))
                    }

                </div>
            </div>
        </section>
    );
};

export default Movies;