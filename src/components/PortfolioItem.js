import React from 'react';
import TwoColumn from './elements/TwoColumn';
import Cta from './elements/Cta';
import Img from './elements/Img';
import Content from './elements/Content';

const PortfolioItem = ({ match, data }) => {

    // Load all content before displaying page
    if( data.length === 0 ) return null;

    // Get portfolio item based on slug
    data = data.filter( item => item.slug === match.params.id )[0]; 
    let ACF = data.ACF;

    // Map through skills used
    let skillsUsed = ACF.project_details['skills-used'].content.map( (item, index) => {
        return `${item.item} <span className="v-sep"></span>`;
    });

    // Map through artcile content
    let content = ACF.portfolio_content.map( ( item, index ) => {
        if(item.acf_fc_layout === 'two_columns') {
            return <TwoColumn 
                    key={ index } 
                    align={ item.content.image_alignment }
                    heading={ item.content['content-group'].heading }
                    content={ item.content['content-group'].content }
                    imgUrl={ item.content.image.url }
                    imgAlt={ item.content.image.alt }
                    />;
        } else if(item.acf_fc_layout === 'cta') {
            return <Cta 
                    key={ index } 
                    buttonText={ item.button.title }
                    url={ item.button.url }
                    heading={ item.heading }
                    content={ item.content }
            />;
        } else if (item.acf_fc_layout === 'image') {
            return <Img 
                    key={ index } 
                    url={ item.img.url }
                    alt={ item.img.alt }
                    />;
        } else if (item.acf_fc_layout === 'content') {
            return <Content 
                    key={ index }
                    heading={ item.heading }
                    content={ item.content }
            />;
        }
    })


    // Display content
    return(
    <div className="single">
        <header>

            <div className="project-overview">

                <h1>{ data.title.rendered }</h1>

                <h2>{ ACF.project_details.overview.heading }</h2>

                <p>{ ACF.project_details.overview.content }</p>

                <div className="skills">
                    { skillsUsed }			
                </div>

            </div>
        </header>



        <article id={`post-${data.id}`} className={`post-${data.id} portfolio`} >
            <div className="contained">
                {content}
            </div>

        </article>

    </div>


    );
};

export default PortfolioItem;