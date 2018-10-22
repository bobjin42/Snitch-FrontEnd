import React from 'react';
import {
  BrowserRouter as Router,
  NavLink,
  Route
} from 'react-router-dom'

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const NavBar = () => {

  return (
    <div id="nav-bar">
      <h1 id="snitch">Snitch</h1>
              <NavLink to='/' exact style={link} activeStyle={{
        background: 'darkblue'
      }}>Home</NavLink>
              <NavLink to='/login' exact style={link} activeStyle={{
        background: 'darkblue'
      }}>Login</NavLink>
              <NavLink to='/userdeatil' exact style={link} activeStyle={{
        background: 'darkblue'
      }}>UserDetail</NavLink>
    </div>
  )
}

export default NavBar
