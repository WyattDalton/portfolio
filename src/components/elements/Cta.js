import React from 'react';

const Cta = props => {
    return(
        <div className="port-content-cta cta">

            <h3>{ props.heading }</h3>
            { props.content }
            <a className="bttn" href={ props.url }>{ props.buttonText }</a>

        </div>
    );
}

export default Cta;