import React from 'react';
import Parser from 'html-react-parser';

const Content = props => {
    return(
        <div className="port-content-row">

            <h3>{ props.heading }</h3>
            { Parser(props.content) }

        </div>
    );
}

export default Content;