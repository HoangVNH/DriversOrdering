import { withLeaflet, MapControl } from "react-leaflet";
import { OpenStreetMapProvider,GeoSearchControl } from "leaflet-geosearch";

class SearchBar extends MapControl {
  constructor(props, context) {
    super(props);
  }

  createLeafletElement(opts) {
    const provider = new OpenStreetMapProvider();
    const searchControl = new GeoSearchControl({
	  provider: provider,
      searchLabel: 'Nhập địa chỉ của bạn',
      keepResult: true,
      autoClose: true
    });
    return searchControl;
  }

  componentDidMount() {
    const { map } = this.props.leaflet;
    map.addControl(this.leafletElement);
  }
}

export default withLeaflet(SearchBar);