import React from 'react';

const FilmRight = ({product}) => {
    console.log(product.description)
    return (
        <div className="filmright">
            <h2 className="filmright__title">
                {product.name}
            </h2>
            <p className="filmright__year">
                {product.year + " "}

                {product.countries?.map(item => item.name + " ")}
            </p>
            <p className="filmright__genre">
               {product.genres?.map(item => " -" + item.name.toUpperCase() + " ")}
            </p>
            <div className="filmright__actor-row">
                {product.persons?.filter((item,idx) => idx < 6).map(item => (
                    <div className="filmright__actor">
                        <div>
                            <img src={item.photo} alt=""/>
                        </div>
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>
            <p className="filmright__desc">
                {product.description}
            </p>
            <div className={"filmright__reting"}>
                {product.rating.imdb}
            </div>
        </div>
    );
};

export default FilmRight;