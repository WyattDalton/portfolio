import React from 'react';

const BgImg = ({ img }) => {
    return (
        console.log( img.alt ),
        <span></span>
        // <img className="bg-img-img" src={ img.url } alt={ img.alt } />
    );
}

export default BgImg;