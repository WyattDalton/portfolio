import React from 'react';
import Parser from 'html-react-parser';

const TwoColumn = props => {

    let align = props.align.replace(/ /g,"-").toLowerCase();
    return(
        <div className={`port-content-two_columns ${ align }`}>

            <div className="bg-img">
                <img className="bg-img-img" src={ props.imgUrl } alt={ props.imgAlt } />
            </div>

            <div className="content-cluster">
                <h3>{ props.heading }</h3>
                { Parser(props.content) }
            </div>

        </div>
    );
}

export default TwoColumn;