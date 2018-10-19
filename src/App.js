<<<<<<< HEAD
/* global google */
import React, { Component } from 'react';
=======
import React, { Component, Fragment } from 'react';
>>>>>>> fcf32953b1b38c3c8816441a674124dbd73facc0
import logo from './logo.svg';
import './App.css';
import GoogleApiWrapper from './Components/MapContainer'
import ControlPanel from './Components/ControlPanel'
import NavBar from './Components/NavBar'
<<<<<<< HEAD


=======
import { Grid } from 'semantic-ui-react'
>>>>>>> fcf32953b1b38c3c8816441a674124dbd73facc0

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
    return (
      <Fragment>
        <NavBar />
        <Grid columns={2} padded>
        <Grid.Column width={10}>
          <GoogleApiWrapper
          setMarkerLocation={this.setMarkerLocation}
          pullMarkerLocation={this.pullMarkerLocation}
          tempMarker={this.state.tempMarker}
<<<<<<< HEAD

        />
=======
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <ControlPanel handleFormChange={this.handleFormChange} formValues={this.state.formValues}/>
        </Grid.Column>
        </Grid>
>>>>>>> fcf32953b1b38c3c8816441a674124dbd73facc0

      </Fragment>

    );
  }
}

export default App;
