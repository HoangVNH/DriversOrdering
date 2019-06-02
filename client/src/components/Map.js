import React, { PureComponent } from "react";
import { default as GLOBAL } from "./Constants";
import { default as API_URL } from "../apis/APICommonService";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import { compose, withProps } from "recompose";

import "../js/nav";

const MyMapComponent = compose(
  withProps({
    googleMapURL: GLOBAL.SERVER_HOST + API_URL.MAP,
    loadingElement: (
      <div
        style={{  height: `100%`  }}
      />
    ),
    containerElement: (
      <div
        style={{  height: `100%`  }}
      />
    ),
    mapElement: (
      <div
        style={{  height: `100%`  }}
      />
    )
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={19}
    defaultOptions={{
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false,
      scaleControl: false,
      rotateControl: false,
      zoomControl: false,
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
    }}
    defaultCenter={{  lat: GLOBAL.LATLNG.lat, lng: GLOBAL.LATLNG.lng}}>
    <Marker 
      position= {{  lat: GLOBAL.LATLNG.lat, lng: GLOBAL.LATLNG.lng  }}
    />
  </GoogleMap>
));

export default class Map extends PureComponent {
  render() {
    return (
      <main className="">
        <MyMapComponent />
      </main>
    );
  }
}
