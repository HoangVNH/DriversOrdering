import React, { Component } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import '../css/search/searchBar.css';

export default class BookingForm extends Component {
	constructor(props) {
		super(props);
		this.state = { address: '' };
	}
	
	handleChange = address => {
		this.setState({ address });
	};
	
	handleSelect = address => {
		geocodeByAddress(address)
		.then(results => getLatLng(results[0]))
		.then(latLng => console.log('Success', latLng))
		.catch(error => console.error('Error', error));
	};
	
	render() {
		return (
			<div>
				<form>
				<PlacesAutocomplete
					value={this.state.address}
					onChange={this.handleChange}
					onSelect={this.handleSelect}
					searchOptions={{
						componentRestrictions: {country: 'vn'},
						types: ['address']
					}}
				>
					{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
					<div className="searchBar">
						<input
						{...getInputProps({
							placeholder: 'Nhập địa chỉ của bạn',
							className: 'location-search-input',
						})}
						/>
						
						<div className="autocomplete-dropdown-container">
						{loading && <div>Loading...</div>}
						{suggestions.map(suggestion => {
							const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item';
							
							const style = suggestion.active ? { backgroundColor: '#fafafa', cursor: 'pointer' } : { backgroundColor: '#ffffff', cursor: 'pointer' };
							return (
							<div
								{...getSuggestionItemProps(suggestion, {
								className,
								style,
								})}
							>
								<span>{suggestion.description}</span>
							</div>
							);
						})}
						</div>
						<i className="fa fa-stop-circle-o"></i>
					</div>
					)}
				</PlacesAutocomplete>

				<PlacesAutocomplete
					value={this.state.address}
					onChange={this.handleChange}
					onSelect={this.handleSelect}
					searchOptions={{
						componentRestrictions: {country: 'vn'},
						types: ['address']
					}}
				>
					{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
					<div className="searchBar">
						<input
						{...getInputProps({
							placeholder: 'Nhập điểm đến',
							className: 'location-search-input',
						})}
						/>
						
						<div className="autocomplete-dropdown-container">
						{loading && <div>Loading...</div>}
						{suggestions.map(suggestion => {
							const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item';
							
							const style = suggestion.active ? { backgroundColor: '#fafafa', cursor: 'pointer' } : { backgroundColor: '#ffffff', cursor: 'pointer' };
							return (
							<div
								{...getSuggestionItemProps(suggestion, {
								className,
								style,
								})}
							>
								<span>{suggestion.description}</span>
							</div>
							);
						})}
						</div>
						<i className="fa fa-stop-circle-o"></i>
					</div>
					)}
				</PlacesAutocomplete>
				
				</form>
			</div>
		);
	}
}