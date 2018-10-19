import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleApiWrapper from './Components/MapContainer'
import ControlPanel from './Components/ControlPanel'
import NavBar from './Components/NavBar'
import { Grid } from 'semantic-ui-react'

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
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <ControlPanel handleFormChange={this.handleFormChange} formValues={this.state.formValues}/>
        </Grid.Column>
        </Grid>

      </Fragment>

    );
  }
}

export default App;
