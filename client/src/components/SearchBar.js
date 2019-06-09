import { withLeaflet, MapControl } from "react-leaflet";
import { OpenStreetMapProvider,GeoSearchControl } from "leaflet-geosearch";

class SearchBar extends MapControl {
  constructor(props, context) {
    super(props);
  }

  createLeafletElement(opts) {
    const provider = new OpenStreetMapProvider();
    const searchControl = new GeoSearchControl({
<<<<<<< Updated upstream
	  provider: provider,
      searchLabel: 'Nhập địa chỉ của bạn',
      keepResult: true,
      autoClose: true
    });
    return searchControl;
=======
        provider: provider,
        showMarker: true,
        showPopup: false,
        autoClose: true,
        retainZoomLevel: false,
        animateZoom: true,
        keepResult: false,
        position: "topleft"
      });
      return searchControl;
>>>>>>> Stashed changes
  }

  componentDidMount() {
    const { map } = this.props.leaflet;
    map.addControl(this.leafletElement);
  }
}

export default withLeaflet(SearchBar);