import React, { Component } from 'react';
import { 
  BrowserRouter,
  Route,
  Switch,
  Redirect
 } from 'react-router-dom';
import './theme.min.css';
import './theme.js';


// Components
import Hero from './components/hero';
import FrontpageNav from './components/FrontpageNav';
import Portfolio from './components/Portfolio';
import PortfolioItem from './components/PortfolioItem';
import Bio from './components/Bio';
import Footer from './components/Footer';



class App extends Component {

  state = {
    hero: [],
    bio: [],
    mission: [],
    detailed_skillset: [],
    detailed_learning: [],
    portfolioItems: [],
  }

  componentDidMount() {
    fetch('http://wyattdalton.com/wp-json/wp/v2/pages/16')
      .then(res => res.json())
      .then((data) => {
        this.setState({ 
          hero: data.ACF['hero_section'],
          bio: data.ACF['bio_section'],
          mission: data.ACF['mission_statement'],
          detailed_skillset: data.ACF['detailed_skillset'],
          detailed_learning: data.ACF['detailed_learning'],
         })
      });

    fetch('http://wyattdalton.com/wp-json/wp/v2/portfolio?_embed')
      .then( res => res.json() )
      .then( (data) => {
        this.setState({
          ...this.state,
          portfolioItems: data,
        })
      })
  }

  render() {

    if(this.state.hero.length === 0) return null;



    return (
      <>
      <BrowserRouter>
        <Hero data={ this.state.hero } />
        <FrontpageNav />
        <div id="primary" className="content-area">
            <main id="main" className="site-main front-dynamic-container">

            <Switch>
              <Redirect exact from="/" to="/work" />

              <Route exact path="/work" render={ props => <Portfolio 
                                                           data={ this.state.portfolioItems } 
                                                           match={props.match}
                                                           /> } />

              <Route path="/work/:id" render={ props => <PortfolioItem  
                                                         match={ props.match }
                                                         data={ this.state.portfolioItems }
                                                         /> } />

              <Route path="/bio" render={ props => <Bio 
                                                    bio={ this.state.bio }
                                                    mission={ this.state.mission }
                                                    learning={this.state.learning }
                                                    skillset={ this.state.skillset } 
                                                    /> } />
            </Switch>

          </main>
        </div>
      </BrowserRouter>

      <Footer />
      </>
      );
    }
}

export default App;
