import React from 'react';
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
import TestimonialBox from '../components/testimonialbox';




var Coverflow = require('react-coverflow');


var Carousel = require('react-responsive-carousel').Carousel;





function Home() {

    const slides = [
        {
            id: 0,
            url: 'photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=' +
                    '80i'
        }, {
            id: 1,
            url: 'photo-1544572571-ab94fd872ce4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1534&q=' +
                    '80'
        }, {
            id: 2,
            url: 'reserve/bnW1TuTV2YGcoh1HyWNQ_IMG_0207.JPG?ixlib=rb-1.2.1&w=1534&q=80'
        }, {
            id: 3,
            url: 'photo-1540206395-68808572332f?ixlib=rb-1.2.1&w=1181&q=80'
        }
    ]

    const fade = useSpring({
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        }
    });

    const calc = (x, y) => [ -(y - window.innerHeight / 2) / 20,
        (x - window.innerWidth / 2) / 20,
        1.1
    ]
    const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

    const [props,
        set] = useSpring(() => ({
        xys: [
            0, 0, 1
        ],
        config: {
            mass: 5,
            tension: 350,
            friction: 40
        }
    }))

    return (
        <animated.div className="App" style={fade}>
            <meta name="format-detection" content="telephone=no"/>

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
<div style={{                                            background: '-webkit-linear-gradient(40deg, #6FB1FC, #4364F7, #6FB1FC)',
}}>
            
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src={parallaxBanner} alt="First slide"/>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={parallaxBanner} alt="Second slide"/>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="..." alt="Third slide"/>
                    </div>
                </div>
            </div>


                <div
                    style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingTop: 50,
                    paddingBottom: 75,
                    background: '-webkit-linear-gradient(40deg, #6FB1FC, #4364F7, #6FB1FC)',

                }}>

                    <div
                        style={{
                        backgroundColor: ''
                    }}>
                        <div
                            style={{
                            fontSize: 100,
                            color: 'white',
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingBottom:20
                        }}>
                            <i class="fas fa-user-circle"></i>
                        </div>
                        <div style={{ paddingTop:10}}>
                        <h3
                            style={{
                            color: 'rgba(57, 106, 252, 0.9)',
                            fontFamily: 'Montserrat',
                            fontSize: '36px',
                            margin:0.5,
                            padding:10,                            
                            paddingLeft: 10,   
                            textAlign: 'center',
                            alignSelf: 'center',
                            fontWeight: 'bolder',
                            filter: 'invert(0%)',
                            borderRadius: 5,
                            border:'8px solid white',
                            backgroundColor:'white'
                        }}>Who Are We?</h3>
                        </div>
                    </div>
<div style={{paddingTop:5, paddingBottom:40}}>
                    <h5
                        style={{
                        fontFamily: 'Montserrat',
                        width: '700px',
                        lineHeight: 1.5,
                        alignSelf: 'center',
                        textAlign: 'center',
                        paddingTop:20,
                        color: 'white',
                    }}>Our team is dedicated to solving your technical frustrations.
                    </h5>
                    </div>
                    <div
                        class="row"
                        style={{
                        width: '80%',
                        color: 'rgb(52, 58, 64)',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'space-between',
                    }}>
                        <Animated animationIn="fadeInUp" isVisible={true}>

                            <div
                                style={{
                                borderRadius: 10,
                                maxWidth: 350,
                                backgroundColor: 'rgba(255,255,255,1)',
                                paddingTop: 50,
                                textAlign: 'center',
                                justifyContent: 'center',
                                alignItems: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                boxShadow: '10px 10px 15px rgba(73, 78, 92, 0.1)',
                                
                            }}>

                                <div
                                    class="card-body"
                                    onMouseMove={({clientX: x, clientY: y}) => set({
                                    xys: calc(x, y)
                                })}
                                    onMouseLeave={() => set({
                                    xys: [0, 0, 1]
                                })}
                                    style={{
                                    transform: props
                                        .xys
                                        .interpolate(trans),
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    
                                }}>

                                    <div
                                        style={{
                                        borderRadius: '50%',
                                        width: '200px',
                                        height: '200px',
                                        alignSelf: 'center',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        border: '5px solid rgba(255,255,255,0.5)',
                                        backgroundColor: 'rgb(0, 183, 96)'
                                    }}><i
                                        style={{
            fontSize: 75,
            color: 'white'
        }}
                                        class="fas fa-clipboard-list"/></div>
                                    <h3
                                        style={{
                                        paddingTop: 40,
                                        color: 'black',
                                        fontFamily: 'Roboto',
                                        fontWeight: 'thin',
                                        paddingBottom: 30
                                    }}>Perform Diagnostic</h3>
                                    <p
                                        style={{
                                        fontFamily: 'Montserrat',
                                        lineHeight: 2
                                    }}>Lorem
                                        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua.</p>
                                </div>

                            </div>
                        </Animated>
                        <Animated animationIn="fadeInUp" isVisible={true}>

                            <div
                                class="text-black"
                                style={{
                                borderRadius: 10,
                                maxWidth: 350,
                                backgroundColor: 'white',
                                paddingTop: 50,
                                textAlign: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                boxShadow: '10px 10px 15px rgba(73, 78, 92, 0.1)'
                            }}>
                                <div
                                    class="card-body"
                                    style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexDirection: 'column',
                                }}>
                                    <div
                                        style={{
                                        borderRadius: '50%',
                                        width: '200px',
                                        height: '200px',
                                        backgroundColor: 'rgb(0, 183, 96)',
                                        alignSelf: 'center',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        border: '5px solid rgba(255,255,255,0.5)',
                                        backgroundColor: 'rgb(0, 183, 96)'
                                    }}>
                                        <i
                                            style={{
                                            fontSize: 100,
                                            color: 'white'
                                        }}
                                            class="fas fa-hand-holding-usd"></i>
                                    </div>
                                    <h3
                                        style={{
                                        paddingTop: 40,
                                        color: 'black',
                                        fontFamily: 'Roboto',
                                        fontWeight: 'thin',
                                        paddingBottom: 30
                                    }}>Get An Estimate</h3>
                                    <p
                                        style={{
                                        fontFamily: 'Montserrat',
                                        lineHeight: 2
                                    }}>Lorem
                                        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                            </div>
                        </Animated>
                        <Animated animationIn="fadeInUp" isVisible={true}>

                            <div
                                class="text-black"
                                style={{
                                borderRadius: 10,
                                maxWidth: 350,
                                backgroundColor: 'white',
                                paddingTop: 50,
                                textAlign: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                boxShadow: '10px 10px 15px rgba(73, 78, 92, 0.1)'
                            }}>
                                <div
                                    class="card-body"
                                    style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexDirection: 'column'
                                }}>
                                    <div
                                        style={{
                                        borderRadius: '50%',
                                        width: '200px',
                                        height: '200px',
                                        backgroundColor: 'rgb(0, 183, 96)',
                                        alignSelf: 'center',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        border: '5px solid rgba(255,255,255,0.5)',
                                        backgroundColor: 'rgb(0, 183, 96)'
                                    }}>
                                        <i
                                            style={{
                                            fontSize: 100,
                                            color: 'white'
                                        }}
                                            class="fas fa-tools"></i>
                                    </div>
                                    <h3
                                        style={{
                                        paddingTop: 40,
                                        color: 'black',
                                        fontFamily: 'Roboto',
                                        fontWeight: 'thin',
                                        paddingBottom: 30
                                    }}>Begin Servicing</h3>
                                    <p
                                        style={{
                                        fontFamily: 'Montserrat',
                                        lineHeight: 2
                                    }}>Lorem
                                        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua.
                                    </p>

                                </div>

                            </div>
                        </Animated>
                    </div>

                </div>

                </div>

                <div
                    style={{
                    width: '100%',
                    alignSelf: 'center',
                    paddingBottom: 50,
                    borderRadius:10,
                    boxShadow: "rgba(0, 0, 0, 0.1) 12px 12px 12px 12px inset;",
                    borderTopRightRadius: 15,
                    borderTopLeftRadius: 15,
                    imageBackground: "url({https://mdbootstrap.com/img/Photos/Others/img%20%2832%29.jpg})"


                }}>
                    <div
                        style={{
                        paddingBottom: '50px',
                        paddingTop: '50px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        
                        
                    }}>

                        <center>
                        <div style={{backgroundColor:'rgba(57, 106, 252, 0.9)', fontFamily:'montserrat', paddingRight:10, paddingLeft:10, paddingTop:10, paddingBottom:10, fontWeight:'thin', color:'rgba(255,255,255, 0.9)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                            <p style={{margin:0, padding:10, paddingLeft:15, paddingRight:15, fontWeight:'bold',  border:'3px solid rgba(255,255,255, 0.9)'}}>OUR SERVICES </p>
                           </div>
                        </center>
                        <h1
                            style={{
                            color: 'rgba(57, 106, 252, 0.9)',
                            fontFamily: 'AvenirNext-DemiBold',
                            fontWeight: 'bold',
                            fontSize: '36px',
                            textAlign: 'center',
                            alignSelf: 'center',
                            paddingTop: 10
                        }}>A Decade of Experience in the Industry.</h1>

                        <h5
                        class="text-muted"
                            style={{
                            fontFamily: 'Roboto',
                            width: '700px',
                            lineHeight: 1.5,
                            alignSelf: 'center',
                            textAlign: 'center',
                            color: 'rgba(13, 71, 161, 0.7)'
                        }}>Lorem ipsum dolor etimet etc etc
                        </h5>

                    </div>

{/*

                    <div class="row">
  <div class="col" style={{backgroundColor:'red'}}>
  </div>
  <div class="col" style={{backgroundColor:'orange'}}>col</div>
  <div class="col" style={{backgroundColor:'yellow'}}>col</div>

  <div class="w-100"></div>
  <div class="col" style={{backgroundColor:'green'}}>col</div>
  <div class="col" style={{backgroundColor:'blue'}}>col</div>
  <div class="col" style={{backgroundColor:'purple'}}>col</div>
  

</div>
<br />
*/}

                    <div
                        class="card"
                        style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        imageBackground: "url({https://mdbootstrap.com/img/Photos/Others/img%20%2832%29.jpg})"
                    }}
                        class="row">

                        <div
                            class="col-lg-6"
                            style={{
                            maxWidth: '40%',
                            height: '100%'
                        }}>

                            <div
                                class="card text-white fadeInUp"
                                style={{
                                borderRadius: 5,
                                height: '100%',
                                width: '100%',
                            }}>
                                <img
                                    src="https://thecellection.com/wp-content/uploads/2016/12/banner-the-cellection-phone-repair.jpg"
                                    class="card-img"
                                    alt="..."
                                    width='1450'
                                    height='250'
                                    style={{
                                        
                                        filter: 'blur(1px)',
                                        
                                    }}
                                    />

                                <div
                                    class="card-img-overlay"
                                    style={{
                                    height: '100%',
                                    display:'flex',
                                    flexDirection:'column',
                                    justifyContent:'center',
                                    padding:0,
                                    backgroundColor:'rgba(0, 183, 96, 0.9)',
                                    boxShadow: '10px 10px 15px rgba(73, 78, 92, 0.1)',



                                }}>

                                    <div class='card-title' style={{}}>
                                        <center>
                                            <div style={{display:'flex',flexDirection:'column', alignItems:'center', justifyContent:'center'}}>

                                            <i
                                                style={{
                                                    display:'flex',
                                                color: 'white',
                                            }}
                                                className='fas fa-wrench fa-3x'></i>
                                        </div>
                                            
                                        </center><br/>
                                        <div style={{}}>

                                        <h4
                                            style={{
                                            textAlign: 'center',
                                            fontFamily: 'Roboto',
                                            fontWeight: 'bold',
                                        }}>
                                            Device Repairs
                                        </h4>

                                        </div>
                                    </div>
                                    <div class="card-text" style={{ display:'flex', alignItems:'left', justifyContent:'left'}}>
                                        <h6
                                            style={{
                                            textAlign: 'left',
                                            fontFamily: 'Montserrat',
                                            lineHeight: '1.5',
                                            fontWeight:'thin',
                                            backgroundColor:'#04d968',
                                            color:'white',
                                            borderTopRightRadius:'5px',
                                            borderBottomRightRadius:'5px',
                                            padding:10,
                                            width:'75%',

                                        }}>
                                            Repair any IOS/Android OS powered mobile devices. Screen, battery, charge port, and more replacements.
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="col-lg-6"
                            style={{
                            maxWidth: '40%'
                        }}>

                            <div
                                class="card text-white fadeInUp"
                                style={{
                                    borderRadius: 5,
                                    height: '100%',
                                width: '100%',

                            }}>
                                <img
                                    src="https://www.mymemory.co.uk/blog/wp-content/uploads/2019/04/SIM-Cards.jpg"
                                    class="card-img"
                                    width='1450'
                                    height='250'
                                    style={{
                                        filter: 'blur(1px)',
                                        
                                    }}

                                    alt="..."/>

                                <div
                                    class="card-img-overlay"
                                    style={{
                                    height: '100%',
                                    padding:0,
                                    display:'flex',
                                    flexDirection:'column',
                                    justifyContent:'center',
                                    backgroundColor:'rgba(0, 183, 96, 0.9)'

                                    
                                }}>
                                                                                <div class="card-title" style={{display:'flex',flexDirection:'column', alignItems:'left', justifyContent:'center', }}>

                                        <i
                                            style={{
                                            color: 'white',
                                            display:'flex',
                                            alignSelf:'center'
                                        }}
                                            class="fas fa-sim-card fa-3x"></i>
                                    <br/>
                                    <h4
                                        style={{
                                        textAlign: 'center',
                                        fontFamily: 'Roboto',
                                        fontWeight: 'bold'
                                    }}>

                                        Carrier Jailbreak
                                    </h4>
                                    </div>
                                    <div class="card-text" style={{ display:'flex', alignItems:'left', justifyContent:'left'}}>
                                        <h6
                                            style={{
                                                textAlign: 'left',
                                                fontFamily: 'Montserrat',
                                                lineHeight: '1.5',
                                                fontWeight:'thin',
                                                backgroundColor:'#04d968',
                                                color:'white',
                                                borderTopRightRadius:'5px',
                                                borderBottomRightRadius:'5px',
                                                padding:10,
                                                width:'75%',

    

                                    }}>
                                        Repair any IOS/Android OS powered mobile devices. Screen, battery, charge port, and more replacements.
                                    </h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div
                        class="card"
                        style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingTop: '25px',
                        borderRadius: 5,
                    }}
                        class="row">
                        <div
                            class="col-lg-6"
                            style={{
                            maxWidth: '40%'
                        }}>

                            <div
                                                               class="card text-white fadeInUp"
                                                               style={{
                                                                borderRadius: 5,
                                                                height: '100%',
                                                               width: '100%',
                               
                            }}>
                                <img
                                    src="https://www.tfix.co.uk/wp-content/uploads/2017/02/iPhone-6S-Plus-Charging-Port-Replacement-Nationwide-Service-1-1030x686.jpg"
                                    class="card-img"
                                    alt="..."
                                    width='1450'
                                    height='250'

                                    style={{
                                        filter: 'blur(1px)',
                                        
                                    }}
/>

<div
                                    class="card-img-overlay"
                                    style={{
                                    height: '100%',
                                    display:'flex',
                                    flexDirection:'column',
                                    padding:0,
                                    justifyContent:'center',
                                    backgroundColor:'rgba(0, 183, 96, 0.9)'
                                }}>
                                                                                <div class="card-title" style={{display:'flex',flexDirection:'column', alignItems:'left', justifyContent:'center', }}>

                                        <i
                                            style={{
                                            color: 'white',
                                            display:'flex',
                                            alignSelf:'center'
                                        }}
                                            className='fas fa-unlock-alt fa-3x'></i>
<br/>
                                    <h4
                                        style={{
                                        textAlign: 'center',
                                        fontFamily: 'Roboto',
                                        fontWeight: 'bold'
                                    }}>

                                        Device Restore
                                    </h4>
                                    </div>
                                    <div class="card-text" style={{ display:'flex', alignItems:'left', justifyContent:'left'}}>
                                        <h6
                                            style={{
                                                textAlign: 'left',
                                                fontFamily: 'Montserrat',
                                                lineHeight: '1.5',
                                                fontWeight:'thin',
                                                backgroundColor:'#04d968',
                                                color:'white',
                                                borderTopRightRadius:'5px',
                                                borderBottomRightRadius:'5px',
                                                padding:10,
                                                width:'75%',



                                    }}>
                                        Repair any IOS/Android OS powered mobile devices. Screen, battery, charge port, and more replacements.
                                    </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="col-lg-6"
                            style={{
                            maxWidth: '40%'
                        }}>

                            <div
                                                                                      class="card text-white fadeInUp"
                                                                                      style={{
                                                                                        borderRadius: 5,
                                                                                        height: '100%',
                                                                                      width: '100%',
                                                                                      borderRadius: 5,

                                                      
                         
                            }}>
                                  <img src="https://www.speedeecash.net/wp-content/uploads/sites/6718/2018/02/banner3.jpg" 
                                                                      style={{
                                                                        filter: 'blur(1px)',
                                                                        
                                                                    }}
                                
                                  class="card-img" 
                                  alt="..." 
                                  width='1450'
                                  height='250'
/>

<div
                                    class="card-img-overlay"
                                    style={{
                                    height: '100%',
                                    display:'flex',
                                    flexDirection:'column',
                                    justifyContent:'center',
                                    backgroundColor:'rgba(0, 183, 96, 0.9)',
                                    padding:0
                                }}>
                                                                                <div class="card-title" style={{display:'flex',flexDirection:'column', alignItems:'left', justifyContent:'center', }}>

                                        <i
                                            style={{
                                            color: 'white',
                                            display:'flex',
                                            alignSelf:'center'
                                        }}
                                            className='fas fa-hand-holding-usd fa-3x'></i>
                                    <br/>
                                    <h4
                                        style={{
                                        textAlign: 'center',
                                        fontFamily: 'Roboto',
                                        fontWeight: 'bold'
                                    }}>
                                        Buy Your Device
                                    </h4>
                                    </div>
                                    <div class="card-text" style={{ display:'flex', alignItems:'left', justifyContent:'left'}}>
                                        <h6
                                            style={{
                                                textAlign: 'left',
                                                fontFamily: 'Montserrat',
                                                lineHeight: '1.5',
                                                fontWeight:'thin',
                                                backgroundColor:'#04d968',
                                                color:'white',
                                                borderTopRightRadius:'5px',
                                                borderBottomRightRadius:'5px',
                                                padding:10,
                                                width:'75%',


                                    }}>
                                       Repair any IOS/Android OS powered mobile devices. Screen, battery, charge port, and more replacements.
                                    </h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div
                        style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingTop: '25px'
                    }}
                        class="row">
                            <div
                            class="col-lg-6"
                            style={{
                            maxWidth: '40%'
                        }}>

                            <div
                                                               class="card text-white fadeInUp"
                                                               style={{
                                                                borderRadius: 5,
                                                                height: '100%',
                                                               width: '100%',
                               
                            }}>
                                  <img src="http://certifiedlaptoprepair.com/images/banner2.jpg" 
                                                                      style={{
                                                                        filter: 'blur(1px)',
                                                                        
                                                                    }}
                                                                    width='1450'
                                                                    height='250'
                                
                                class="card-img" alt="..." />

<div
                                    class="card-img-overlay"
                                    style={{
                                    height: '100%',
                                    display:'flex',
                                    flexDirection:'column',
                                    justifyContent:'center',
                                    padding:0,
                                    backgroundColor:'rgba(0, 183, 96, 0.9)'

                                }}>
                                                                                <div class="card-title" style={{display:'flex',flexDirection:'column', alignItems:'left', justifyContent:'center', }}>

                                        <i
                                            style={{
                                            color: 'white',
                                            display:'flex',
                                            alignSelf:'center'
                                        }}                                            className='fas fa-laptop-medical fa-3x'></i>
                                    <br/>
                                    <h4
                                        style={{
                                        textAlign: 'center',
                                        fontFamily: 'Roboto',
                                        fontWeight: 'bold'
                                    }}>
                                        Laptop Password Removal
                                    </h4>
                                    </div>
                                    <div class="card-text" style={{ display:'flex', alignItems:'left', justifyContent:'left'}}>
                                        <h6
                                            style={{
                                                textAlign: 'left',
                                                fontFamily: 'Montserrat',
                                                lineHeight: '1.5',
                                                fontWeight:'thin',
                                                backgroundColor:'#04d968',
                                                color:'white',
                                                borderTopRightRadius:'5px',
                                                borderBottomRightRadius:'5px',
                                                padding:10,
                                                width:'75%',

                                    }}>

Repair any IOS/Android OS powered mobile devices. Screen, battery, charge port, and more replacements.                                    </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="col-lg-6"
                            style={{
                            maxWidth: '40%'
                        }}>

                            <div
                                                              class="card text-white fadeInUp"
                                                              style={{
                                                                borderRadius: 5,
                                                                height: '100%',
                                                              width: '100%',
                              
                            }}>
                                  <img src="https://www.reviews.org/au/app/uploads/2019/05/sim-cards-banner.jpg" 
                                                                      style={{
                                                                        filter: 'blur(1px)',
                                                                        
                                                                    }}
                                
                                  class="card-img" alt="..." 
                                  width='1450'
                                  height='250'
/>

<div
                                    class="card-img-overlay"
                                    style={{
                                    height: '100%',
                                    display:'flex',
                                    flexDirection:'column',
                                    justifyContent:'center',
                                    backgroundColor:'rgba(0, 183, 96, 0.9)',
                                    padding:0
                                }}>
                                                                                <div class="card-title" style={{display:'flex',flexDirection:'column', alignItems:'left', justifyContent:'center', }}>

                                        <i
                                            style={{
                                            color: 'white',
                                            display:'flex',
                                            alignSelf:'center'
                                        }}                                            class="fas fa-broadcast-tower fa-3x"></i>
                                    <br/>
                                    <h4
                                        style={{
                                        textAlign: 'center',
                                        fontFamily: 'Roboto',
                                        fontWeight: 'bold'
                                    }}>
                                        Prepaid Carrier Activations
                                    </h4>
                                    </div>
                                    <div class="card-text" style={{ display:'flex', alignItems:'left', justifyContent:'left'}}>
                                        <h6
                                            style={{
                                                textAlign: 'left',
                                                fontFamily: 'Montserrat',
                                                lineHeight: '1.5',
                                                fontWeight:'thin',
                                                backgroundColor:'#04d968',
                                                color:'white',
                                                borderTopRightRadius:'5px',
                                                borderBottomRightRadius:'5px',
                                                padding:10,
                                                width:'75%',



                                    }}>
Repair any IOS/Android OS powered mobile devices. Screen, battery, charge port, and more replacements.                                    </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <center>
    <div style={{paddingBottom:20, paddingTop:50}}>
                <button
                                                    style={{
                                                    bottomRightRadius: 0,
                                                    backgroundColor:'rgba(0, 183, 96, 0.9)',
                                                    borderRadius:1
                                                }}
                                                    class="btn btn-circle btn-lg">
                                                    <div
                                                        style={{
                                                        fontFamily: 'Montserrat',
                                                        color: 'white',
                                                        fontWeight: 'bold',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        
                                                        textAlign:'center', fontWeight:'bold'
                                                    }}>            See All Services <div>&nbsp;&nbsp;<i class="fas fa-chevron-right" /></div>
                                                    </div>
                                                </button>
                                                </div>
                                                </center>

                </div>





                <div
                    style={{
                    textAlign: "center",
                    backgroundColor: 'transparent',
                    color: 'white'
                }}>

                    <Parallax
                        bgImage={parallaxBanner}
                        strength={200}
                        blur={{
                        min: -10,
                        max: 10
                    }}>

                        <div
                            style={{
                            paddingBottom: 50,
                            paddingTop: 50,
                            margin:20,
                            borderRadius:5
                            
                        }}>
                            <span
                                style={{
                                fontSize: 75,
                                fontWeight: 'bold',
                                fontFamily: 'Bebas Neue',
                                color:'white',
                                padding:15,
                                paddingBottom:5
                                
                            }}>Quality Parts.</span>
                            
                            <span
                            style={{
                                fontSize: 75,
                                fontWeight: 'bold',
                                fontFamily: 'Bebas Neue'}}>
                             &nbsp;Fast Servicing.
                             </span>
                             <br />
<div style={{paddingTop:20}}>
                            <button
                                style={{
                                border: '0px solid #FFFFFF'
                            }}
                                class="btn btn-lg btn-outline-danger">
                                <div
                                    style={{
                                    fontFamily: 'Montserrat',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    display: 'flex',
                                    flexDirection:'row',
                                    justifyContent:'center',
                                    alignItems:'center'
                                }}>SCHEDULE APPOINTMENT&nbsp;&nbsp;<i class="fas fa-chevron-right"></i></div>
                                
                            </button>
                            
                            </div>
                        </div>

                    </Parallax>

                </div>

                <div style={{}}>
                    <section style={{
                        width: '100%'
                    }}>

<div
                        style={{
                        paddingTop: '50px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        
                        
                        
                    }}>
                        <div style={{backgroundColor:'rgb(234, 76, 137)', fontFamily:'montserrat', paddingRight:10, paddingLeft:10, paddingTop:10, paddingBottom:10, fontWeight:'thin', color:'rgba(255,255,255, 0.9)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                            <p style={{margin:0, padding:10, paddingLeft:20, paddingRight:15, fontWeight:'bold', border:'3px solid rgba(255,255,255, 0.9)'}}>TESTIMONIALS</p>
                           </div>






                        
                        <h1
                            style={{
                            color: 'rgb(234, 76, 137)',
                            fontFamily: 'AvenirNext-DemiBold',
                            fontWeight: 'bold',
                            fontSize: '36px',
                            textAlign: 'center',
                            alignSelf: 'center',
                            paddingTop: 10
                        }}>See Why Customers Love Us.</h1>




                        <h5
                        class="text-muted"
                            style={{
                            fontFamily: 'Roboto',
                            width: '700px',
                            lineHeight: 1.5,
                            alignSelf: 'center',
                            textAlign: 'center',
                            color: 'rgba(13, 71, 161, 0.7)',
                        }}>See why customers love us.
                        </h5>

                    </div>

                        <div
                            class="row text-center"
                            style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                        }}>

                            <section
                                class="text-center"
                                style={{
                                    display:'flex',
                                    flexDirection:'row',
                                    justifyContent:'center',
                                    paddingBottom:50
                            }}>



<TestimonialBox blockqcolor="#007bff" pfp="https://mdbootstrap.com/img/Others/documentation/img%20(27)-mini.jpg" name="Tasnim Ali" testimonial="Outstanding quality screens. Haven't experienced any defects unlike the other establishments i've visited." />
<TestimonialBox blockqcolor="#ea4c89" pfp="https://mdbootstrap.com/img/Others/documentation/img%20(28)-mini.jpg" name="Abdul Khaled" testimonial="Lorem ipsum dolor etimet etc etc. Lorem ipsum dolor etimet etc etc. Lorem ipsum dolor etimet etc etc. Tas is wack. Lorem ipsum dolor etimet etc etc"/>
<TestimonialBox blockqcolor="rgb(4, 217, 104)" pfp="https://mdbootstrap.com/img/Others/documentation/img%20(20)-mini.jpg" name="Hakeem Khaled" testimonial="Lorem ipsum dolor etimet etc etc. Lorem ipsum dolor etimet etc etc. Lorem ipsum dolor etimet etc etc. Yo anybody got a light?"/>
                            </section>

                        </div>

                    </section>

                </div>
                {/*
                <div class="container my-4">

<p class="font-weight-bold">Bootstrap carousel multiple items is an improved version of the standard bootstrap
  carousel which allows you to put inside more than one element.</p>

<p><strong>Detailed documentation and more examples of Bootstrap grid you can find in our </strong><a href="https://mdbootstrap.com/docs/jquery/javascript/carousel/"
      target="_blank">Bootstrap Carousel Docs</a></p>

<hr class="my-4" />

<div id="multi-item-example" class="carousel slide carousel-multi-item" data-ride="carousel">

  <div class="controls-top">
    <a class="btn-floating" href="#multi-item-example" data-slide="prev"><i class="fa fa-chevron-left"></i></a>
    <a class="btn-floating" href="#multi-item-example" data-slide="next"><i class="fa fa-chevron-right"></i></a>
  </div>
  <ol class="carousel-indicators">
    <li data-target="#multi-item-example" data-slide-to="0" class="active"></li>
    <li data-target="#multi-item-example" data-slide-to="1"></li>
    <li data-target="#multi-item-example" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner" role="listbox">

    <div class="carousel-item active">

      <div class="row">
        <div class="col-md-4">
          <div class="card mb-2">
            <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg"
              alt="Card image cap" />
            <div class="card-body">
              <h4 class="card-title">Card title</h4>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                card's content.</p>
              <a class="btn btn-primary">Button</a>
            </div>
          </div>
        </div>

        <div class="col-md-4 clearfix d-none d-md-block">
          <div class="card mb-2">
            <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
              alt="Card image cap" />
            <div class="card-body">
              <h4 class="card-title">Card title</h4>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                card's content.</p>
              <a class="btn btn-primary">Button</a>
            </div>
          </div>
        </div>

        <div class="col-md-4 clearfix d-none d-md-block">
          <div class="card mb-2">
            <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
              alt="Card image cap" />
            <div class="card-body">
              <h4 class="card-title">Card title</h4>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                card's content.</p>
              <a class="btn btn-primary">Button</a>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="carousel-item">

      <div class="row">
        <div class="col-md-4">
          <div class="card mb-2">
            <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"
              alt="Card image cap" />
            <div class="card-body">
              <h4 class="card-title">Card title</h4>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                card's content.</p>
              <a class="btn btn-primary">Button</a>
            </div>
          </div>
        </div>

        <div class="col-md-4 clearfix d-none d-md-block">
          <div class="card mb-2">
            <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(47).jpg"
              alt="Card image cap" />
            <div class="card-body">
              <h4 class="card-title">Card title</h4>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                card's content.</p>
              <a class="btn btn-primary">Button</a>
            </div>
          </div>
        </div>

        <div class="col-md-4 clearfix d-none d-md-block">
          <div class="card mb-2">
            <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(48).jpg"
              alt="Card image cap" />
            <div class="card-body">
              <h4 class="card-title">Card title</h4>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                card's content.</p>
              <a class="btn btn-primary">Button</a>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="carousel-item">

      <div class="row">
        <div class="col-md-4">
          <div class="card mb-2">
            <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(53).jpg"
              alt="Card image cap" />
            <div class="card-body">
              <h4 class="card-title">Card title</h4>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                card's content.</p>
              <a class="btn btn-primary">Button</a>
            </div>
          </div>
        </div>

        <div class="col-md-4 clearfix d-none d-md-block">
          <div class="card mb-2">
            <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg"
              alt="Card image cap" />
            <div class="card-body">
              <h4 class="card-title">Card title</h4>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                card's content.</p>
              <a class="btn btn-primary">Button</a>
            </div>
          </div>
        </div>

        <div class="col-md-4 clearfix d-none d-md-block">
          <div class="card mb-2">
            <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(51).jpg"
              alt="Card image cap" />
            <div class="card-body">
              <h4 class="card-title">Card title</h4>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                card's content.</p>
              <a class="btn btn-primary">Button</a>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>

</div>


</div>

*/}






{/* Footer was here */}

        </animated.div>
    );
}

export default Home;

const bodyStyle = {};
const headerStyle = {};

const carouselStyle = {};

const navbarStyle = {}