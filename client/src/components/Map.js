import React, { Component } from "react";
import { default as GLOBAL } from "./Constants";
import "../js/nav";
import AsyncMap from './AsyncMap';

export default class Map extends Component {

	render() {
		return (
      <div style={{ margin: `100px` }}>
        <AsyncMap
          google={this.props.google}
          center={{ lat: GLOBAL.LATLNG.lat, lng: GLOBAL.LATLNG.lng }}
        />
      </div>
        
		);
	}
}
