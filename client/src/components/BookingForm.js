import React, { Component } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import '../css/search/searchBar.css';
import '../js/file-phone';

export default class BookingForm extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			pickAddress: '',
			latLngPick: [],
			dropAddress: '',
			latLngDrop: [],
			isEnterPhoneNum: false,
			isEnter: false,
			price: 1,
			distance: 0
		};
	}

	componentDidMount() {
		console.log("BookingForm ne: ",this.props.google);
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
				this.setState({ pickAddress, latLngPick: [latLng.lat, latLng.lng] });
				console.log('pickAddress & latLng', pickAddress, latLng);
			})
			.catch(error => console.log('Error Pick address ', error))
	};

	handleSelectDropAddress = dropAddress => {
		geocodeByAddress(dropAddress)
			.then(result => getLatLng(result[0]))
			.then(latLng => {
				this.setState({ dropAddress, latLngDrop: [latLng.lat, latLng.lng] })
			})
			.catch(error => console.log('Error Drop address ', error))
	};

	onClickOrderBtn = event => {
		event.preventDefault();
		console.log("onClickOrderBtn");
		// if (this.state.isEnterPhoneNum === false) {
		// 	this.setState({
		// 		isEnterPhoneNum: true
		// 	});
		// } else {
			const { latLngPick, latLngDrop } = this.state;
			var service = new this.props.google.maps.DistanceMatrixService();
			service.getDistanceMatrix({
				origins: ["" + latLngPick],
				destinations: ["" + latLngDrop],
				travelMode: this.props.google.maps.TravelMode.DRIVING,
			},
				(response, status) => {
					if (status === this.props.google.maps.DistanceMatrixStatus.OK ) {
						var dis = response.rows[0].elements[0].distance.text;
						var price = 2000 * response.rows[0].elements[0].distance.value;
						this.setState({
							distance: dis,
							price: price
						})
					}
			});
		// }
	}

	onHandleEnterPhoneNum = e => {
		e.preventDefault();
		console.log("onHandleEnterPhoneNum");
		if (this.state.isEnter === false) {
			this.setState({
				isEnter: true
			});
		}
	}
	
	render() {
		
		let { isEnterPhoneNum, isEnter } = this.state;

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
				
					{/* {(!isEnterPhoneNum) && 
						(<button
							data-toggle="modal" data-target="#showModal"
							className="btn btn-info tim-kiem" 
							onClick = {this.onClickOrderBtn}>
							Đặt Xe
						</button>)
					} */}
					
					{/* {(isEnterPhoneNum && isEnter) && */}
						<button
							className="btn btn-info tim-kiem" 
							onClick = {this.onClickOrderBtn}>
							Đặt Xe
						</button>
					{/* } */}
				</form>


				<div className="modal fade" id="showModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
					<form>
						<div className="modal-dialog modal-dialog-centered" role="document">
							<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="exampleModalCenterTitle">Nhập Số Điện Thoại Của Bạn</h5>
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">×</span>
								</button>
							</div>
							<div className="modal-body">
								
								<div className="form-group d-flex">
									<input className="form-control" type="tel"  placeholder="Số điện thoại" />
								</div>
								
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-dark" data-dismiss="modal">Đóng</button>
								<button type="button" className="btn btn-danger" onClick= {this.onHandleEnterPhoneNum} >Hoàn Tất</button>
							</div>
							</div>
						</div>
					</form>
				</div>


			</div>
		);
	}
}