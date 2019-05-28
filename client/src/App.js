import React, { PureComponent } from 'react';
import { default as GLOBAL } from './components/Constants';
import Map from './components/Map';

export default class App extends PureComponent {
  render() {
    return (
      <div className="App">
            <Map />
      </div>
    );
  }
}