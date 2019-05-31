import React, { PureComponent } from 'react';
import { default as GLOBAL } from './components/Constants';

import './css/nav_header/nav.css';
import './js/nav';

import Urls from './router/Urls';

import Map from './components/Map';
import Nav from './components/Nav';
import Header from './components/Header';

import { BrowserRouter as Router } from "react-router-dom";

export default class App extends PureComponent {
  render() {
    return (
      <Router>
        <Header></Header>
        <Nav></Nav>
        <Urls></Urls>
      </Router>
    );
  }
}