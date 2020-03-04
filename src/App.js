import React, { Component } from 'react';
import { 
  BrowserRouter,
  Route,
  Switch,
  Redirect,
 } from 'react-router-dom';
import './theme.min.css';
import './theme.js';


// Components
import Hero from './components/hero';
import FrontpageNav from './components/FrontpageNav';
import Portfolio from './components/Portfolio';
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
    if(this.state.bio.length === 0) return null;
    if(this.state.mission.length === 0) return null;
    if(this.state.detailed_skillset.length === 0) return null;
    if(this.state.detailed_learning.length === 0) return null;
    if(this.state.portfolioItems.length === 0) return null;


    console.log('ready')


    return (
      <>
      <BrowserRouter>

        <Hero data={ this.state.hero } />

        <FrontpageNav />

        <div id="primary" className="content-area">
          <main id="main" className="site-main front-dynamic-container">

            <Switch>
              <Redirect exact from="/" to="/portfolio" />
              <Route path="/portfolio" render={ () => <Portfolio data={ this.state.portfolioItems } /> } />
              <Route path="/bio" render={ () => <Bio 
                                                      bio={ this.state.bio }
                                                      mission={ this.state.mission }
                                                      learning={this.state.detailed_learning }
                                                      skillset={ this.state.detailed_skillset } 
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
