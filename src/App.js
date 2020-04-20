import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import HomePageContainer from './container/homePage';
import ContactUsContainer from './container/contactUs';
import DisplayRouteComponent from './container/displayRoute';

// css module
import "./styles/scss/style.scss";
import "./styles/css/animate.css"
import "./styles/css/aos.css"
import "./styles/css/bootstrap.min.css"
import "./fonts/flaticon/font/_flaticon.scss"

export default class App extends React.Component {

  render() {
  return (
    <div>
      <head>
      </head>
      <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light site-navbar-target" id="ftco-navbar">
	    <div className="container">
	      <a className="navbar-brand" href="index.html">Meet<span>Up.</span></a>
	      <button className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span className="oi oi-menu"></span> Menu
	      </button>

	      <div className="collapse navbar-collapse" id="ftco-nav">
	        <ul className="navbar-nav nav ml-auto">
           <a className="nav-link" href="#home-section">
              <span>Home</span>
            </a>
            <a className="nav-link" href="#contact-section">
              <span>Contact Us</span>
            </a>
	        </ul>
	      </div>
	    </div>
	  </nav>
    <Switch>
      <Route path="/detail">
        <DisplayRouteComponent/>
      </Route>
      <Route path="/">
        <HomePageContainer/>
        <ContactUsContainer/>
      </Route>
    </Switch>
    </div>
  )
  }
}

