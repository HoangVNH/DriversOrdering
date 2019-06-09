<<<<<<< HEAD
=======
import React, { Component } from "react";
import { default as GLOBAL } from "./Constants";
import "../js/nav";
import L from 'leaflet';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import SearchBar from './SearchBar';

var pinIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12.5, 41],
    popupAnchor: [0, -41],
});

export default class MyMap extends Component {

	constructor(props) {
		super(props);
		this.state = {
			pickAddress: '',
			dropAddress: '',
			didUserLogin: false,
			mapPosition: {
				lat: GLOBAL.LATLNG.lat,
				lng: GLOBAL.LATLNG.lng
			},
			markerPostition: {
				lat: GLOBAL.LATLNG.lat,
				lng: GLOBAL.LATLNG.lng
			},
		}
	}

	render() {
		const { mapPosition, markerPostition } = this.state;
		return (
			<main>
				<Map
					center={mapPosition}
					zoom={18}
					zoomControl={false} 
					doubleClickZoom={false}  
					touchZoom={false} 
					style={{height: '100%'}}>
					<TileLayer
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
					/>
					<Marker 
						icon={pinIcon}
						position={markerPostition}>
						<Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
					</Marker>
					<SearchBar />
				</Map>
			</main>
		);
	}
}
>>>>>>> master
