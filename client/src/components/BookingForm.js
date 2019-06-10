import React, { Component } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import '../css/search/searchBar.css';

export default class BookingForm extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			pickAddress: '',
			dropAddress: ''
		};
	}
	
	onChangePickAddress = pickAddress => {
		this.setState({ pickAddress });
	};

	onChangeDropAddress = dropAddress => {
		this.setState({ dropAddress });
	};
	
	handleSelectPickAddress = pickAddress => {
		geocodeByAddress(pickAddress)
			.then(result => getLatLng(result[0]))
			.then(latLng => {
				console.log('Get Pick address successfully ', latLng);
				this.setState({ pickAddress });
			})
			.catch(error => console.log('Error Pick address ', error));
	};

	handleSelectDropAddress = dropAddress => {
		geocodeByAddress(dropAddress)
			.then(result => getLatLng(result[0]))
			.then(latLng => {
				console.log('Get Drop address successfully ', latLng);
				this.setState({ dropAddress });
			})
			.catch(error => console.log('Error Drop address ', error));
	};
	
	render() {
		return (
			<div>
				<form>
					<PlacesAutocomplete
						value={this.state.pickAddress}
						onChange={this.onChangePickAddress}
						onSelect={this.handleSelectPickAddress}
						searchOptions={{
							componentRestrictions: {country: 'vn'},
							types: ['address']
						}}
						highlightFirstSuggestion={true}
					>
						{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
						<div className="searchBar_from">
							<input
								{...getInputProps({
									placeholder: 'Nhập địa chỉ của bạn',
								})}
							/>
							
							<div>
								{loading && <div>Loading...</div>}
								{suggestions.map(suggestion => {
									const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item';
									
									const style = suggestion.active ? { backgroundColor: '#fafafa', cursor: 'pointer' } : { backgroundColor: '#ffffff', cursor: 'pointer' };
									return (
									<div
										{...getSuggestionItemProps(suggestion, {
											className, style,
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
						value={this.state.dropAddress}
						onChange={this.onChangeDropAddress}
						onSelect={this.handleSelectDropAddress}
						searchOptions={{
							componentRestrictions: {country: 'vn'},
							types: ['address']
						}}
						highlightFirstSuggestion={true}
					>
						{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
						<div className="searchBar_to">
							<input
								{...getInputProps({
									placeholder: 'Nhập điểm đến',
								})}
							/>
							
							<div>
								{loading && <div>Loading...</div>}
								{suggestions.map(suggestion => {
									const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item';
									
									const style = suggestion.active ? { backgroundColor: '#fafafa', cursor: 'pointer' } : { backgroundColor: '#ffffff', cursor: 'pointer' };
									return (
									<div
										{...getSuggestionItemProps(suggestion, {
											className, style,
										})}
									>
										<span>{suggestion.description}</span>
									</div>
									);
								})}
							</div>
							<i className="fa fa-location-arrow"></i>
						</div>
						)}
					</PlacesAutocomplete>
				
					<button className="btn btn-info tim-kiem">Đặt Xe </button>

				</form>
			</div>
		);
	}
}