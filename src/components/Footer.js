import React from 'react';

const Footer = () => {
    return(
        <footer id="colophon" className="site-footer">
          <div className="site-info">
              &copy; { new Date().getFullYear() }, Wyatt Dalton
          </div>
      </footer>
    );
}

export default Footer;