import React, { Component } from 'react'
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './img/brand.png';
import contactHeader from './img/contactHeader.png';

import placeHolder1 from './img/placeholder1.png';
import placeHolder2 from './img/placeholder2.png';

import phoneImg1 from './img/phoneImg1.jpg';
import phoneImg2 from './img/phoneImg2.jpg';
import phoneImg3 from './img/phoneImg3.jpg';
import phoneImg4 from './img/phoneImg4.jpg';
import brand2 from './img/brand2.png';
import officehomos from './img/officehomos.mp4';



import estimateBanner from './img/estimate-banner.jpg';
import promoBanner from './img/promobanner.png';
import mapPlaceHolder from './img/mapplaceholder.png';
import parallaxBanner from './img/parallax_banner.jpg';

import {ReactComponent as FBLogo} from './img/fbicon.svg';
import {ReactComponent as TWLogo} from './img/twicon.svg';
import {ReactComponent as YTLogo} from './img/yticon.svg';
import {ReactComponent as IGLogo} from './img/igicon.svg';
import {ReactComponent as PhoneBrand} from './img/logophone.svg';

import {Animated} from "react-animated-css";
import {Parallax, Background} from 'react-parallax';

import {Map, GoogleApiWrapper} from 'google-maps-react';

import {StickyContainer, Sticky} from 'react-sticky';

import {useSpring, animated} from 'react-spring';



import Home from './pages/index'
import Services from './pages/services'
import About from './pages/about'
import FAQ from './pages/faq'



import Header from './components/header'
import Footer from './components/footer'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';



export default class App extends Component {
    render() {
        return (
            <Router>
            <div style={{}}>
<Header />              
              <Switch>
                  <Route exact path='/' component={Home} />
                  <Route path='/services' component={Services} />
                  <Route path='/about' component={About} />
                  <Route path='/faq' component={FAQ} />
              </Switch>
<Footer />
            </div>
          </Router>         )
   
    }
}
