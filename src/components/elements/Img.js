import React from 'react';

const Img = props => {
    return(
        <figure className="port-content-img">

            <img src={ props.url } alt={ props.alt } />

        </figure>
    );
}

export default Img;