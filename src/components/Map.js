import React from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const MapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyC6Y_ZKWUMAEzm4PXNTiq8qQ77dyYO2sWQ&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `60vh` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: 45.524039, lng: -122.681709 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 45.524039, lng: -122.681709 }} onClick={props.onMarkerClick} />}
  </GoogleMap>
);

class Map extends React.PureComponent {
  constructor (props) {
    super(props);

    this.state = {
      isMarkerShown: false
    }
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  componentWillUnmount() {
    this.setState({
      isMarkerShown: true
    })
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    return (
      <MapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    )
  }
}

export default Map;
