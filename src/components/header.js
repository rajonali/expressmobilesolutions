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

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';



export default class Header extends Component {
    render() {
        return (

            <div style={{display:'flex', minWidth:'100%'}}>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>

                <link
                    href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Montserrat:300,400,500,700"
                    rel="stylesheet"/>

                <link href="lib/font-awesome/css/font-awesome.min.css" rel="stylesheet"/>
                <link href="lib/animate/animate.min.css" rel="stylesheet"/>
                <link href="lib/ionicons/css/ionicons.min.css" rel="stylesheet"/>
                <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet"/>
                <link href="lib/lightbox/css/lightbox.min.css" rel="stylesheet"/>

                <link
                    href="https://fonts.googleapis.com/css?family=Lato&display=swap"
                    rel="stylesheet"/>
                <link
                    href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
                    rel="stylesheet"/>

              
                <link
                    rel="stylesheet"
                    href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
                    integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
                    crossorigin="anonymous"/>
                        <div
                        class="row"
                        style={{
                            display: 'flex',
                            flexDirection: 'row',  
                            margin: 0,  
                        minWidth: '100%',
                        background: '-webkit-linear-gradient(40deg, #6FB1FC, #4364F7, #6FB1FC)'
                    }}>


                        <div class="col">
                            <center>
                                <div
                                    style={{
                                    fontFamily: "Montserrat",
                                    fontSize: 40,
                                    color: 'white',
                                    fontWeight: 'bold',
                                    paddingTop: 25
                                }}>
                                    <PhoneBrand
                                        style={{
                                        height: '67px'
                                    }}/>
            
                                    Express Mobile Solutions</div>
                            </center>
                        </div>
                        <div
                            class="col"
                            style={{
                            paddingTop: 10,
                            width: '100%'
                        }}>
                            <div>
                                <div>
                                    <nav
                                        class="navbar navbar-expand-lg navbar-light"
                                        style={{
                                        paddingTop: 20,
                                        display: 'flex',
                                        flexDirection: 'row'
                                    }}>
            
                                        <button
                                            class="navbar-toggler"
                                            type="button"
                                            data-toggle="collapse"
                                            data-target="#navbarNav"
                                            aria-controls="navbarNav"
                                            aria-expanded="false"
                                            aria-label="Toggle navigation">
                                            <span class="navbar-toggler-icon"></span>
                                        </button>
                                        <div
                                            class="collapse navbar-collapse"
                                            id="navbarNav"
                                            style={{
                                            display: 'flex',
                                            flexDirection: 'row'
                                        }}>
                                            <div
                                                class="container"
                                                style={{
                                                fontSize: '20px',
                                                maxWidth: '75%',
                                                alignSelf: 'flex-end'
                                            }}>
                                                <ul
                                                    style={{
                                                    fontSize: 20
                                                }}>
                                                    <li class="one">
                                                        <a
                                                            href="/"
                                                            style={{
                                                            fontFamily: 'Lato',
                                                            color: 'white',
                                                            backgroundColor: 'rgba(255,255,255,0.3)',
                                                            fontWeight: 'bold',
                                                            borderBottom: '4px solid #00b760',
                                                            textDecoration: 'none'
                                                        }}>
    Home
                                                        </a>
                                                    </li>
                                                    <li class="two">
                                                        <a
                                                            href="/services"
                                                            style={{
                                                            fontFamily: 'Lato',
                                                            color: 'white',
                                                            textDecoration: 'none'
                                                        }}>
                                                            Services
                                                        </a>
                                                    </li>
                                                    <li class="three">
                                                        <a
                                                            href="/about"
                                                            style={{
                                                            fontFamily: 'Lato',
                                                            color: 'white',
                                                            textDecoration: 'none'
                                                        }}>
                                                            About Us
                                                        </a>
                                                    </li>
                                                    <li class="four">
                                                        <a
                                                            href="/faq"
                                                            style={{
                                                            fontFamily: 'Lato',
                                                            color: 'white',
                                                            textDecoration: 'none'
                                                        }}>
                                                            F.A.Q
                                                        </a>
                                                    </li>
            
                                                </ul>
                                            </div>
                                            <div
                                                style={{
                                                paddingBottom: 15
                                            }}>
                                                <button
                                                    style={{
                                                    bottomRightRadius: 0,
                                                    borderBottom: '4px solid #FFFFFF'
                                                }}
                                                    class="btn btn-circle btn-md btn-primary">
                                                    <div
                                                        style={{
                                                        fontFamily: 'Montserrat',
                                                        color: 'white',
                                                        fontWeight: 'bold',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center'
                                                    }}>GET ESTIMATE</div>
                                                </button>
                                            </div>
                                        </div>
                                    </nav>
            
                                </div>
            
                            </div>
                        </div>
                    </div>
                    </div>
            )
                }
            }
