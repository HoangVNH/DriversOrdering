import React, { Component } from 'react';

import './css/nav_header/nav.css';
import './js/nav';

import Urls from './router/Urls';

import Nav from './components/Nav';
import Header from './components/Header';
import 'leaflet/dist/leaflet.js';
import 'leaflet/dist/leaflet.css';

import { BrowserRouter as Router } from "react-router-dom";

export default class App extends Component {
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