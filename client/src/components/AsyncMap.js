import React, { Component } from "react";
import { default as API_URL } from "../apis/APICommonService";
import { default as GLOBAL } from "./Constants";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import Geocode from 'react-geocode';
import Autocomplete from 'react-google-autocomplete';
import "../js/nav";

Geocode.setApiKey(`${GLOBAL.API_KEY}`);
// Geocode.enableDebug();

export default class AsyncMap extends Component {

	constructor(props) {
		super(props);
		this.state = {
			pickAddress: '',
			dropAddress: '',
			mapPosition: {
				lat: this.props.center.lat,
				lng: this.props.center.lng
			},
			markerPostition: {
				lat: this.props.center.lat,
				lng: this.props.center.lng
			}
		}
	}

	componentDidMount() {
		console.log("componentDidMount AsyncMap");
		Geocode.fromLatLng( this.state.mapPosition.lat, this.state.mapPosition.lng ).then(response => {
			const address = response.results[0].formatted_address;
			this.setState({
				pickAddress: ( address ) ? address : ''
			})}, err => {
				console.log(err);
			});
	};

	shouldComponentUpdate( nextProps, nextState ) {
		console.log("shouldComponentUpdate AsyncMap");
		if (this.state.markerPostition.lat !== this.props.center.lat || this.state.pickAddress !== nextState.pickAddress)
			return true;
		return false;
	}

	onChange = event => {
		console.log("onChange event: " + event.target);
		this.setState({
			[event.target.name] : event.target.value
		})
	}

	onPlaceSelected = place => {
		console.log("onPlaceSelected" + place);
		const pickAddress = place.formatted_address,
			  pickLatValue = place.geometry.location.lat(),
			  pickLngValue = place.geometry.location.lng();

		this.setState({
			pickAddress: (pickAddress) ? pickAddress : '',
			mapPosition: {
				lat: pickLatValue,
				lng: pickLngValue
			},
			markerPosition: {
				lat: pickLatValue,
				lng: pickLngValue
			}
		})
	};

	render() {

		const MyMapComponent = withScriptjs(
			withGoogleMap (
				props => (
					<GoogleMap
						defaultZoom={17}
						defaultCenter={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng }}
						defaultOptions={{
							mapTypeControl: false,
							streetViewControl: false,
							fullscreenControl: false,
							scaleControl: false,
							rotateControl: false,
							zoomControl: false,
							keyboardShortcuts: false,
							styles: [
								{
									featureType: 'poi.business',
									stylers: [{visibility: 'off'}]
								},
								{
									featureType: 'transit',
									elementType: 'labels.icon',
									stylers: [{visibility: 'off'}]
								}
								]
							}}>
						<Autocomplete 
							style={{
								width: '60%',
								height: '40px',
								paddingLeft: '16px',
								marginTop: '2px',
								marginBottom: '100px',
							}}
							onPlaceSelected = { this.onPlaceSelected }
							types={['(regions']}
							componentRestrictions={{country: "vi"}}
						/>
						<Autocomplete
							style={{
								width: '100%',
								height: '40px',
								paddingLeft: '16px',
								marginTop: '2px',
								marginBottom: '500px'
							}}
							onPlaceSelected={ this.onPlaceSelected }
							types={['(regions)']}
							componentRestrictions={{country: "vi"}}
						/>
						<Marker
							draggable={false}
							position={{ lat: this.state.markerPostition.lat, lng: this.state.markerPostition.lng }}>
						</Marker>
					</GoogleMap>
				)
			)
		);

		console.log("render AsyncMap");
		let map;
		
		if (this.props.center.lat !== undefined) {
			map = <div>
					<div>
						
						<MyMapComponent
							googleMapURL= {GLOBAL.SERVER_HOST + API_URL.MAP}
							loadingElement={
								<div style={{ height: `500px` }} />
							}
							containerElement={
								<div style={{ height: `500px` }} />
							}
							mapElement={
								<div style={{  height: `500px`  }} />
							}
						/>
					</div>
			</div>
		} else {
			map = <div style={{  height: `400px`  }} />
		}
		return (map);
}}