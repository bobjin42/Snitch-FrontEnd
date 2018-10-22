import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar'
import Login from './Components/Login'
import UserDetail from './Components/UserDetail'
import Home from './Components/Home'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'


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
        location: {},
        comment: ''
      },
      display: false,
      currentUser: {}
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

  handleCommentSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3001/api/v1/comments', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          user_id: this.state.currentUser.id,
          location_id: this.state.selectedLocation,
          commentDescription: this.state.formValues.comment
      })
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

  userFormSubmit=(username, password, submitType)=>{
    let endpoint;
    submitType === "signup" ? endpoint = "users" : endpoint = "login"
      fetch(`http://localhost:3001/api/v1/${endpoint}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      })
      .then(r=> r.json())
      .then((userData)=>{
        this.setState({
          currentUser: userData
        })
      })
      // .then(window.location.href = "http://localhost:3000/")
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
          user_id: this.state.currentUser.id,
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
          location: {},
          comment: ""
        }
      })
    })
  }


  render() {
    console.log(this.state.formValues);
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
                  handleCommentSubmit={this.handleCommentSubmit}
                  formValues={this.state.formValues}
                  display={this.state.display}
                  selectedLocation={this.state.selectedLocation}/>
                }/>
              <Route path="/login"
                render={()=> <Login
                  userFormSubmit={this.userFormSubmit}/>
                }/>
              <Route path="/userdetail"
                render={()=> <UserDetail
                  currentUser={this.state.currentUser}
                  handleCommentSubmit={this.handleCommentSubmit}
                  handleFormChange={this.handleFormChange}
                  formValues={this.state.formValues}
                  mapData={this.state.mapData.filter((location)=>{
                    return location.user_id === this.state.currentUser.id
                  })}/>
                }/>
            </Switch>
        </Fragment>
      );
    }


}

export default App;


// <Route path="/login"
//   render={()=> <Login
//     userFormSubmit={this.userFormSubmit}/>
//     this.state.currentUser.username === '' ? (
//       <Redirect to="/login" />
//     ) : (
//       <Redirect to="/" />
//     )
//   }/>
