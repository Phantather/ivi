import React from 'react';

const FilmLeft = ({product}) => {

    const url = product.videos && product.videos.trailers.find((item) => item.site === 'youtube' && item.url.includes('embed'))?.url || null

    return (
        <div>
            <iframe width="707" height="410" src={url}
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen>
            </iframe>
        </div>
    );
};

export default FilmLeft;