import React from 'react';
import {Map,Marker,GoogleApiWrapper,HeatmapLayer} from 'google-maps-react';
import {Router, Route} from 'react-router';




export class MapContainer extends React.Component {

  handleMarkerClick = (event) => {
    this.props.pullMarkerLocation(event)
  }
  handleMapClick = (x,y,z) => {
    const locationObj = {lat: z.latLng.lat(), lng: z.latLng.lng()}
    this.props.setMarkerLocation(locationObj)

  }
  render() {

    return (


        <Map
          google={this.props.google}
          zoom={14}
          onClick={this.handleMapClick}
          initialCenter={{lat: 40.704805199999996, lng: -74.0133346}}
        >

          <Marker name={'location_1'} onClick={this.handleMarkerClick} />
          {this.props.tempMarker.set ? <Marker name={"test"} position={this.props.tempMarker.location} onClick={this.handleMarkerClick} /> : null }
        </Map>




    )
  }

}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo")
})(MapContainer)
