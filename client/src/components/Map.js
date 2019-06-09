import React, { Component } from "react";
import { default as GLOBAL } from "./Constants";
import "../js/nav";
import AsyncMap from './AsyncMap';

export default class Map extends Component {

	render() {
		return (
      <main>
          <AsyncMap
            center={{ lat: GLOBAL.LATLNG.lat, lng: GLOBAL.LATLNG.lng }}
          />
      </main>
        
		);
	}
}
