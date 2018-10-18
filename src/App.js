import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleApiWrapper from './Components/MapContainer'
import ControlPanel from './Components/ControlPanel'
import NavBar from './Components/NavBar'

const APIKey = "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedLocation: '',
      tempMarker: {
        location: {},
        set: false
      }

    }
  }
  pullMarkerLocation = (event) => {
    this.setState({
      selectedLocation: event.name
    },() => console.log(this.state.selectedLocation))
  }
  setMarkerLocation = (obj) => {
    this.setState({
      tempMarker: {
        location: obj,
        set: true
      }
    })
  }



  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ControlPanel />
        <GoogleApiWrapper
          setMarkerLocation={this.setMarkerLocation}
          pullMarkerLocation={this.pullMarkerLocation}
          tempMarker={this.state.tempMarker}

        />

      </React.Fragment>

    );
  }
}

export default App;
