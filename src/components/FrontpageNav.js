import React from 'react';
import { NavLink } from 'react-router-dom';

import SocialLinks from './elements/SocialLinks';

const FrontpageNav = () => {
    return(
        <div className="front-page-nav-cont">
  
    <nav className="front-page-nav">
      <div className="contained">
      
        <div className="nav-items">
          <NavLink exact className="scrollAnchor" to="/work">my work</NavLink>
          <NavLink className="scrollAnchor" to="/bio">about me</NavLink>
        </div>

        <div className="contact-links">
          <SocialLinks class_name='social_links' />
        </div>
      </div>
    </nav>
  
  </div>
    );
}

export default FrontpageNav;