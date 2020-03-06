import React from 'react';
import Parser from 'html-react-parser';

const Cta = props => {
    return(
        <div className="port-content-cta cta">

            <h3>{ props.heading }</h3>
            { Parser(props.content) }
            <a className="bttn" href={ props.url }>{ props.buttonText }</a>

        </div>
    );
}

export default Cta;