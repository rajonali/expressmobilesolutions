import { render } from 'react-dom'
import { useState, useEffect } from 'react'
import { useTransition, animated, config } from 'react-spring'



import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import promoBanner from './img/promobanner.png';


import React, { Component } from 'react'



const slides = [
  { id: 0, url: {promoBanner} },
  { id: 1, url: {promoBanner} },
  { id: 2, url: {promoBanner} },
  { id: 3, url: {promoBanner} },
]




export default class springs extends Component {
  render() {
    return (
      <div>
        <Slider style={{width:'100%', height:'100%'}}>
  {slides.map((id, url) => 
  
  <div key={id}>
    <img src={promoBanner} style={{height:'100%', width:'100%' }} />
  </div>
  
  
  )}
</Slider>

      </div>
    )
  }
}

