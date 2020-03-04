import React from 'react';
import $ from 'jquery';

import SocialLinks from './elements/SocialLinks';

const Hero = ({ data }) => {

    
    let img = data.background_image;
    let url = img.url;
    

    return (

        <section id="hero" className="bg-img header">

            <SocialLinks class_name='social_links' />

            <img className="bg-img-img" src={ url } alt="" />
            <div className="content-cluster contained">
                <h2>{ data.h2 }</h2>
                <h1>{ data.h1 }</h1>
            </div>
        </section>

    );
}

export default Hero;