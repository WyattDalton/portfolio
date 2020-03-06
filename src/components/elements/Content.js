import React from 'react';

const Content = props => {
    return(
        <div className="port-content-row">

            <h3>{ props.heading }</h3>
            { props.content }

        </div>
    );
}

export default Content;