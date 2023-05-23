import React from 'react';

const Card = ({item}) => {
    return (
        <div className="product">
            <img className="product__img" src={item.poster.url} alt=""/>
            <h2 className="product__title">{item.name}</h2>
            <p className="product__desc">Подписка</p>
        </div>
    );
};

export default Card;