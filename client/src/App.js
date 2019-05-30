import React, { PureComponent } from 'react';
import { default as GLOBAL } from './components/Constants';

import './css/nav/nav.css';
import './js/nav';
import './js/checkfile';

import Map from './components/Map';
import Nav from './components/Nav';
import Header from './components/Header';




export default class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <Nav></Nav>
        <main className="">

          <Header></Header>

          <Map />

        </main>
      </div>
    );
  }
}