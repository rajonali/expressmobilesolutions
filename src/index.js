import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {ParallaxProvider} from 'react-scroll-parallax';
import Home from './pages/index';
import Services from './pages/services';

import { BrowserRouter } from 'react-router-dom'


ReactDOM.render(
    <ParallaxProvider style={{}}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</ParallaxProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls. Learn
// more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
