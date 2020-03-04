import React from 'react';

import { faInstagram, faLinkedinIn, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialLinks = props =>{
    return(
    <div className={props.class_name}>
            <a className="fb-link" title="Wyatt's Facebook" href="https://www.facebook.com/wyatt.dalton"><FontAwesomeIcon icon={ faFacebookF } /></a>
            <a className="fb-link" title="Wyatt's Instagram" href="https://www.instagram.com/wyatt.dalton/"><FontAwesomeIcon icon={ faInstagram } /></a>
            <a className="fb-link" title="Wyatt's Linkdin" href="https://www.linkedin.com/in/wyatt-dalton-0a075b150/"><FontAwesomeIcon icon={ faLinkedinIn } /></a>
            <a className="fb-link" title="Wyatt's Resume" href="http://wyattdalton.com/WyattDalton-resume.pdf"><FontAwesomeIcon icon={ faFileAlt } /></a>
    </div>
    );
}

export default SocialLinks;