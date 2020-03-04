import React from 'react';

import PortfolioListing from './PortfolioListing';

const Portfolio = ({ data }) => {

    let items = data.map((item) => {
        return <PortfolioListing title={ item.title.rendered }
                                 slug={ item.slug }
                                 content={ item.ACF }
                                 img={ item._embedded['wp:featuredmedia'][0].source_url }
                                 key={ item.id }
                                 />

    })

    return(
        <section id="portfolio_container">
                  
            { items }
  
        </section>
    );
}

export default Portfolio;