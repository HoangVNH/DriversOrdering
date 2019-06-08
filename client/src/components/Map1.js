import React, { Component } from "react";
import { default as GLOBAL } from "./Constants";
import "../js/nav";
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

export default class Map1 extends Component {

	render() {
		console.log("render Map1.js");
		//const position = [GLOBAL.LATLNG.lat, GLOBAL.LATLNG.lng];
		const position = [GLOBAL.LATLNG.lat, GLOBAL.LATLNG.lng];
		return (
			<main>
				<Map className="myMap" center={position} zoom={18} zoomControl={false} style={{height: "100%"}}>
					<TileLayer
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
					/>
					<Marker position={position}>
						<Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
					</Marker>
				</Map>
			</main>
		);
	}
}
