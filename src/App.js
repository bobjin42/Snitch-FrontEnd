/* global google */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleApiWrapper from './Components/MapContainer'
import ControlPanel from './Components/ControlPanel'
import NavBar from './Components/NavBar'



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedLocation: '',
      tempMarker: {
        location: {},
        set: false
      },
      formValues: {
        title: '',
        description: ''
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
  handleFormChange = (event) => {
    console.log(event.target)
  }



  render() {
    let style = {clear: 'right'}
    return (
      <div style={style}>
        <NavBar />
        <ControlPanel handleFormChange={this.handleFormChange} formValues={this.state.formValues}/>
        <GoogleApiWrapper
          setMarkerLocation={this.setMarkerLocation}
          pullMarkerLocation={this.pullMarkerLocation}
          tempMarker={this.state.tempMarker}

        />

      </div>

    );
  }
}

export default App;
