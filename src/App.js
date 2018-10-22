import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar'
import Login from './Components/Login'
import UserDetail from './Components/UserDetail'
import Home from './Components/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mapData:[],
      selectedLocation: '',
      tempMarker: {
        location: {},
        set: false
      },
      formValues: {
        title: '',
        description: '',
        location: {}
      },
      display: false

    }
  }

  componentDidMount=()=>{
    fetch('http://localhost:3001/api/v1/locations')
    .then(response => response.json())
    .then((mapData)=>{
      this.setState({
        mapData
      })
    })
  }

  pullMarkerLocation = (id) => {
    this.setState({
      selectedLocation: id,
      display: true
    },()=>{
      this.state.mapData.find((marker)=>{
        return marker.id === this.state.selectedLocation
      })
    })
  }

  setMarkerLocation = (obj) => {
    this.setState({
      tempMarker: {
        location: obj,
        set: true
      },
      display: false
    })
  }

  handleFormChange = (event) => {
    this.setState({
      formValues:{
        ...this.state.formValues,
        [event.target.name]: event.target.value
      }
    })
  }

  handleInputSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3001/api/v1/locations', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        location: {
          user_id: 1,
          latitude: this.state.tempMarker.location.lat,
          longitude: this.state.tempMarker.location.lng,
          title: this.state.formValues.title,
          description: this.state.formValues.description
        }
      })
    })
    .then(r => r.json())
    .then(response => {
      this.setState({
        mapData: [
          ...this.state.mapData,
          response
        ],
        selectedLocation: '',
        tempMarker: {
          location: {},
          set: false
        },
        formValues: {
          title: '',
          description: '',
          location: {}
        }
      },() => console.log(this.state))
    })
  }


  render() {
    return (
      <Fragment>
        <NavBar />
          <Switch>
            <Route exact path="/"
              render={()=> <Home
                mapData={this.state.mapData}
                setMarkerLocation={this.setMarkerLocation}
                pullMarkerLocation={this.pullMarkerLocation}
                tempMarker={this.state.tempMarker}
                handleInputSubmit = {this.handleInputSubmit}
                handleFormChange={this.handleFormChange}
                formValues={this.state.formValues}
                display={this.state.display}
                selectedLocation={this.state.selectedLocation}/>
              }/>
            <Route path="/login" component={Login}/>
            <Route path="/userdeatil" component={UserDetail}/>
          </Switch>
      </Fragment>
    );
  }
}

export default App;

// <Route exact path="/" component={Home}/>
//
// <Grid columns={2} padded>
//   <Grid.Column width={10}>
//     <GoogleApiWrapper
//       mapData={this.state.mapData}
//       setMarkerLocation={this.setMarkerLocation}
//       pullMarkerLocation={this.pullMarkerLocation}
//       tempMarker={this.state.tempMarker}
//     />
//     />
//   </Grid.Column>
//   <Grid.Column width={6}>
//     <ControlPanel
//       handleInputSubmit = {this.handleInputSubmit}
//       handleFormChange={this.handleFormChange}
//       formValues={this.state.formValues}
//       tempMarker={this.state.tempMarker.location}
//       display={this.state.display}
//       mapData={this.state.mapData}
//       selectedLocation={this.state.selectedLocation}
//     />
//   </Grid.Column>
// </Grid>
