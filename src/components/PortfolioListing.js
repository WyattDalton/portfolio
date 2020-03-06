import React, { Component } from 'react';
import {
    NavLink,
  } from 'react-router-dom';

  export default class PortfolioListing extends Component {

    render () {

       const { 
            title, 
            slug, 
            content, 
            img,
            match } = this.props;

        const listing = content.project_details;
        const overview = listing.overview;
        const skills = listing['skills-used'];
        const tech = listing.technology;
        const what = listing['what-i-did'];


        let skillsUsed = skills.content.map( (item, index) => {
            return <li key={index}>{item.item}</li>
        });

        let techUsed = tech.content.map( (item, index) => {
            return <li key={index}>{item.item}</li>
        });


        return(
            <article id="post-179" className="portfolio-item bg-img">
                <img className="bg-img-img dark" src={ img } alt={ title } />
            
                <div className="portfolio-item-content">

                    <div className="info-cluster left">
                        <h2>{ title }</h2>
                        { content.one_line_overview }
                        <NavLink to={ `${match.url}/${slug}` } className="bttn scrollAnchor">View Project</NavLink>
                    </div>

                    <div className="info-cluster bg-blurred right">
                    
                        <div className="overview">
                            <h3>{ overview.heading }</h3>
                            <p>{ overview.content }</p>
                        </div>
                        
                        <span className="h-sep"></span>
                        
                        <div className="what-i-did">
                            <h3>{ what.heading }</h3>
                            <p>{ what.content }</p>
                        
                        </div>
                        
                        <span className="h-sep"></span>
                        
                        <div className="skills">
                            <h3>{ skills.heading }</h3>
                            <ul>
                                { skillsUsed }
                            </ul>
                        </div>

                        <span className="h-sep"></span>

                        <div className="technology">
                            <h3>{ tech.heading }</h3>
                            <ul>
                                { techUsed }
                            </ul>
                        </div>
                        
                    </div>

                </div>
            
            </article>
        );
    }
}