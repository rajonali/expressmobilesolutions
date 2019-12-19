import React, { Component } from 'react'
import '../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../img/brand.png';
import contactHeader from '../img/contactHeader.png';

import placeHolder1 from '../img/placeholder1.png';
import placeHolder2 from '../img/placeholder2.png';

import phoneImg1 from '../img/phoneImg1.jpg';
import phoneImg2 from '../img/phoneImg2.jpg';
import phoneImg3 from '../img/phoneImg3.jpg';
import phoneImg4 from '../img/phoneImg4.jpg';
import brand2 from '../img/brand2.png';
import officehomos from '../img/officehomos.mp4';



import estimateBanner from '../img/estimate-banner.jpg';
import promoBanner from '../img/promobanner.png';
import mapPlaceHolder from '../img/mapplaceholder.png';
import parallaxBanner from '../img/parallax_banner.jpg';

import {ReactComponent as FBLogo} from '../img/fbicon.svg';
import {ReactComponent as TWLogo} from '../img/twicon.svg';
import {ReactComponent as YTLogo} from '../img/yticon.svg';
import {ReactComponent as IGLogo} from '../img/igicon.svg';
import {ReactComponent as PhoneBrand} from '../img/logophone.svg';

import {Animated} from "react-animated-css";
import {Parallax, Background} from 'react-parallax';

import {Map, GoogleApiWrapper} from 'google-maps-react';

import {StickyContainer, Sticky} from 'react-sticky';

import {useSpring, animated} from 'react-spring';


export default class Services extends Component {
    render() {
        return (
            <div>
                <header>
                    Our Services
                </header>
            </div>
        )
    }
}
