import React from 'react';
import {
  BrowserRouter as Router,
  NavLink,
  Route
} from 'react-router-dom'
import { Button } from 'semantic-ui-react'

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  border: 'black',
  textDecoration: 'none',
  color: 'white'
}

const button = {
   background:"none!important",
   color:"white",
   opacity: "0%",
   width: '100px',
   padding: '12px',
   margin: '0 6px 6px',
   border: 'black',
   textDecoration: 'none'
}



const NavBar = (props) => {
  return(
    <div id="nav-bar">
    <h1 id="snitch" style={{textAlign:"left"}}>Snitch</h1>
    <div style={{textAlign:"right"}}>
      <NavLink to='/' exact style={link} activeStyle={{
      background: 'black'
      }}>Home</NavLink>


      <NavLink to='/userdetail' exact style={link} activeStyle={{
      background: 'black'
      }}>User</NavLink>

      {props.currentUser.username === undefined ?
        <NavLink to='/login' exact style={link} activeStyle={{
          background: 'black'
        }}>Login</NavLink>
        :
        <Button className="ui inverted black basic button" onClick={()=>{window.location.reload()}}>Logout</Button>
      }
    </div>
    </div>

  )

}

export default NavBar

// <button style={{button}} onClick={()=>{window.location.reload()}}>Logout</button>
